import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import { harvestValues, harvestColumns, harvestKeyValues, idToInt } from '../utils.js';
import { parse } from 'url';



class ForumController {

    createForum (req, res) {
		let user = req.body['user'];
		const slug = req.body['slug'];
		const title = req.body['title'];
		UserModel.getUserNickname(user)
			.then( data => {
				if (data) {
					user = data.nickname;
					ForumModel.getForumBySlug(slug) // OPT можно делать селект только в случае если есть дубликаты
						.then( data =>{
							if (!data) {
								const newForumData = [
									slug,
									title,
									user
								]
								console.log('NEW FORUM DATA', newForumData);
								ForumModel.createNewForum(newForumData)
									.then( data => {
										return res.status(201).json(data);
									})
									.catch( error => {
										console.log('--------------------------------------------');
										console.log('ERROR IN CREATING Forum');
										console.log(error);
									});
			
							} else {
								return res.status(409).json(data);
							}
						})
						.catch( error => {
							console.log('--------------------------------------------');
							console.log('ERROR IN GETTING FORUM BY SLUG');
							console.log(error);
							return res.status(500).json({ message : "crash" })
						});
				} else {
					res.status(404).json({ message : "Can't find user" });
				}              
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING USER BY NICK');
				console.log(error);
				return res.status(500).json({ message : "crash" });
			});
	}

	
	getDetails (req, res) {
		const slug = req.params['slug'];
		ForumModel.getForumBySlug(slug)
			.then( data => {
				// console.log('GETTED DATA', data);
				if (data) {
					return res.status(200).json(data);
				}
				return res.status(404).json({ message : 'cant find forum' });
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING FORUM BY SLUG');
                console.log(error);
                return res.status(500).json({ message : "crash" })
			});


	}

	createThreadInForum (req, res) {
		let author = req.body['author'];
		let forumSlug = req.params['slug'];
		//  есть ли пользователь с таким ником
		UserModel.getUserNickname(author)
			.then( data => {
				if (data) {
					author = data.nickname;
				} else {
					return res.status(404).json({ message : "Can't find user" });
				}
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING USER BY NICK');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			});
			
		// есть ли форум в котором хотят создать ветку 
		ForumModel.getForumSlug(forumSlug)
			.then( data => {
				if (data) {
					forumSlug = data.slug;
				} else {
					return res.status(404).json({ message : "Can't find forum" });
				}
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING FORUM BY SLUG');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			});

		// существует ли ветка с таким название, если да то 409
		ThreadModel.getThreadBySlug(req.body['slug'])
			.then( data => {
				if (data) {
					return res.status(409).json(data);
				}
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING USER BY NICK');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			});
		
		// создаем ветку
		const keyValues = harvestKeyValues(req.body);
		keyValues['author'] = author;
		keyValues['forum'] = forumSlug;
		const columns = harvestColumns(req.body);
		for (let i = 0; i < columns.length; i++) {
			if (columns[i] === 'message' || columns[i] === 'created') {
				columns[i] = '"' + columns[i] + '"';
			}
		}
		const values = harvestValues(req.body);
		ThreadModel.createNewThread(columns, values)
			.then( data => {

				ForumModel.createForumUserPair(forumSlug, author)
					.then( () => {
						console.log('pair created');
					})
					.catch( error => {
						console.log('--------------------------------------------');
						console.log('ERROR IN creating pair');
						console.log(error);
						return res.status(500).json({ message : "crash" })
					});

				ForumModel.incrementThreads(forumSlug)
					.then( () => {
						data.id = parseInt(data.id); // pg-promise считает BIGSERIAL строкой хз почему
						return res.status(201).json(data);
					})
					.catch( error => {
						console.log('--------------------------------------------');
						console.log('ERROR IN threads increment');
						console.log(error);
						return res.status(500).json({ message : "crash" })
					});
				
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN CREATING THREAD');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			});	
	}

	getThreads (req, res) {
		const slug = req.params['slug'];
		const queryParams = harvestKeyValues(req.query);
		if (!queryParams['limit']) {
			queryParams['limit'] = 10
		} else {
			queryParams['limit'] = parseInt(queryParams['limit']);
		}
		ForumModel.getForumSlug(slug)
			.then( data => {
				if (data){
					ThreadModel.getThreadsByForumSlug(slug, queryParams)
						.then( data =>{
							if (data) {
								data = idToInt(data);
								return res.status(200).json(data);
							}
						})
						.catch( error => {
							console.log('--------------------------------------------');
							console.log('ERROR IN GETTING THREADS OF FORUM');
							console.log(error);
							return res.status(500).json({ message : "crash" })
						});	
				} else {
					return res.status(404).json({ message : "Can't find forum" });
				}
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING FORUM BY SLUG');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			});	
	}
}


export default new ForumController;