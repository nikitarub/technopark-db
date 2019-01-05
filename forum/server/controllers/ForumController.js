import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';



class ForumController {

    createForum (req, res) {
		let user = req.body['user'];
		const slug = req.body['slug'];
		const title = req.body['title'];
		console.log('FORUM OWNER', user);
		UserModel.getUserNickname(user)
			.then( data => {
				if (data) {
					user = data.nickname;
				} else {
					return res.status(404).json({ message : "Can't find user" })
				}              
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING USER BY NICK');
				console.log(error);
				return res.status(500).json({ message : "crash" })
			});

		ForumModel.getForumBySlug(slug)
			.then( data =>{
				if (!data) {
					const newForumData = [
						slug,
						title,
						user
					]
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
		
	}
	
	getDetails (req, res) {
		const slug = req.params['slug'];
		ForumModel.getForumBySlug(slug)
			.then( data => {
				console.log('GETTED DATA', data);
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

	createBranch (req, res) {

	}
}


export default new ForumController;