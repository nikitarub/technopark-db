import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import { harvestValues, harvestColumns, harvestKeyValues, idToInt } from '../utils.js';
import { parse } from 'url';
import 'babel-polyfill';




class ForumController {

	async createForum (req, res) {
		let user = req.body['user'];
		const slug = req.body['slug'];
		const title = req.body['title'];

		try {
            user = await UserModel.getUserNickname(user);
            if (!user) {
                return res.status(404).json({ message : "Can't find user" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICK');
            console.log(error);
            return res.status(500).json({ message : "crash" })
		}

		const newForumData = [
			slug,
			title,
			user.nickname
		]
		const result = await ForumModel.createNewForum(newForumData);

		if (result) {
			return res.status(201).json(result);
		} else {
			let exsistingForum;
			try {
				exsistingForum = await ForumModel.getForumBySlug(slug);
				return res.status(409).json(exsistingForum)
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING FORUM BY SLUG');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			}

		}
	}


	
	getDetails (req, res) {
		const slug = req.params['slug'];
		ForumModel.getForumBySlug(slug)
			.then( data => {
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


	async createThreadInForum (req, res) {
		let author = req.body['author'];
		let forumSlug = req.params['slug'];
		let forum;

        try {
            author = await UserModel.getUserNickname(author);
            if (!author) {
                return res.status(404).json({ message : "Can't find user" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICK');
            console.log(error);
            return res.status(500).json({ message : "crash" })
		}

		try {
            forum = await ForumModel.getForumSlug(forumSlug);
            if (!forum) {
                return res.status(404).json({ message : "Can't find forum" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING FORUM BY SLUG');
            console.log(error);
            return res.status(500).json({ message : "crash" })
		}

		const keyValues = harvestKeyValues(req.body);
		keyValues['author'] = author.nickname;
		keyValues['forum'] = forum.slug;
		
		const columns = harvestColumns(keyValues);
		for (let i = 0; i < columns.length; i++) {
			if (columns[i] === 'message' || columns[i] === 'created') {
				columns[i] = '"' + columns[i] + '"';
			}
		}
		const values = harvestValues(keyValues);
		const result = await ThreadModel.createNewThread(columns, values);
		if (result) {
			try {
				await ForumModel.createForumUserPairUsingForum(forum.slug, author.nickname)
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN creating pair');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			} 

			try {
				await ForumModel.incrementThreads(forum.slug);
				result.id = parseInt(result.id);
				return res.status(201).json(result);
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN threads increment');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			} 
		} else {
			let exsistingThread;
			try {
				exsistingThread = await ThreadModel.getThreadBySlug(req.body['slug']);
				exsistingThread.id = parseInt(exsistingThread.id);
				return res.status(409).json(exsistingThread)
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING THREAD BY SLUG !!!!');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			}
		}
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

	async getUsers (req, res) {
		const slug = req.params['slug'];
		const queryParams = harvestKeyValues(req.query);
		if (!queryParams['limit']) {
			queryParams['limit'] = 10
		} else {
			queryParams['limit'] = parseInt(queryParams['limit']);
		}
		queryParams.desc = queryParams.desc === 'true';
		let forum;
		try {
			forum = await ForumModel.getForumBySlug(slug);
		} catch (error) {
			console.log('--------------------------------------------');
			console.log('ERROR IN GETTING FORUM BY SLUG');
			console.log(error);
			return res.status(500).json({ message : "crash" })
		}

		if (!forum) {
			return res.status(404).json({ message : "Can't find forum" });
		} 

		let result = [];
		try {
			result = await ForumModel.getUsers(forum.slug, queryParams);
		} catch (error) {
			console.log('--------------------------------------------');
			console.log('ERROR IN GETTING USERS IN FORUM');
			console.log(error);
			return res.status(500).json({ message : "crash" })
		}
		return res.status(200).json(result);

	} 
}


export default new ForumController;