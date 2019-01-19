import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import { harvestValues, harvestColumns, harvestKeyValues, idToInt, forumSerializer } from '../utils.js';
import 'babel-polyfill';




class ForumController {

	async createForum (request, reply) {
		let user = request.body['user'];
		const slug = request.body['slug'];
		const title = request.body['title'];

		try {
            user = await UserModel.getUserNickname(user);
            if (!user) {
                return reply.status(404).send({ message : "Can't find user" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICK');
            console.log(error);
            return reply.status(500).send({ message : "crash" })
		}

		const newForumData = [
			slug,
			title,
			user.nickname
		]
		const result = await ForumModel.createNewForum(newForumData);

		if (result) {
			return reply.status(201).send(result);
		} else {
			let exsistingForum;
			try {
				exsistingForum = await ForumModel.getForumBySlug(slug);
				return reply.status(409).send(exsistingForum)
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING FORUM BY SLUG');
				console.log(error);
				return reply.status(500).send({ message : "crash" })
			}

		}
	}

	getDetails (request, reply) {
		// console.log(req.originalUrl, req.method);
		const slug = request.params['slug'];
		ForumModel.getForumBySlug(slug)
			.then( data => {
				if (data) {
					// console.log('forum getDetails',data);
					return reply.status(200).send(data);
				}
				return reply.status(404).send({ message : 'cant find forum' });
			})
			.catch( error => {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING FORUM BY SLUG');
                console.log(error);
                return reply.status(500).send({ message : "crash" })
			});


	}

	async createThreadInForum (request, reply) {
		// console.log(req.originalUrl, req.method);
		let author = request.body['author'];
		let forumSlug = request.params['slug'];
		let forum;

        try {
			author = await UserModel.getUserNickname(author);
            if (!author) {
                return reply.status(404).send({ message : "Can't find user" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICK');
            console.log(error);
            return reply.status(500).send({ message : "crash" })
		}

		try {
			forum = await ForumModel.getForumSlug(forumSlug);
            if (!forum) {
                return reply.status(404).send({ message : "Can't find forum" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING FORUM BY SLUG');
            console.log(error);
            return reply.status(500).send({ message : "crash" })
		}

		const keyValues = harvestKeyValues(request.body);
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
				await ForumModel.createForumUserPair(forum.slug, author.nickname)
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN creating pair');
				console.log(error);
				return reply.status(500).send({ message : "crash" })
			} 

			try {
				await ForumModel.incrementThreads(forum.slug);
				result.id = parseInt(result.id);
				return reply.status(201).send(result);
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN threads increment');
				console.log(error);
				return reply.status(500).send({ message : "crash" })
			} 
		} else {
			let exsistingThread;
			try {
				exsistingThread = await ThreadModel.getThreadBySlug(request.body['slug']);
				exsistingThread.id = parseInt(exsistingThread.id);
				return reply.status(409).send(exsistingThread)
			} catch (error) {
				console.log('--------------------------------------------');
				console.log('ERROR IN GETTING THREAD BY SLUG !!!!');
				console.log(error);
				return reply.status(500).send({ message : "crash" })
			}
		}
	}


 
	
	async getThreads (request, reply) {
		// console.log(req.originalUrl, req.method);

		const slug = request.params['slug'];
		const queryParams = harvestKeyValues(request.query);
		if (!queryParams['limit']) {
			queryParams['limit'] = 10
		} else {
			queryParams['limit'] = parseInt(queryParams['limit']);
		}

		let result = await ThreadModel.getThreadsByForumSlug(slug, queryParams);
		result = idToInt(result);
		if (!result || !result.length) {
            const forum = await ForumModel.getForumSlug(slug);
            if (!forum) {
                return reply.status(404).send({ mesage : 'cant find forum' });
            } else {
                return reply.status(200).send(result);
            }
		}
		return reply.status(200).send(result);

	}

	async getUsers (request, reply) {
		// console.log(req.originalUrl, req.method);

		const slug = request.params['slug'];
		const queryParams = harvestKeyValues(request.query);
		if (!queryParams['limit']) {
			queryParams['limit'] = 10
		} else {
			queryParams['limit'] = parseInt(queryParams['limit']);
		}
		queryParams.desc = queryParams.desc === 'true';

		let result = await ForumModel.getUsers(slug, queryParams);

		if (!result || !result.length) {
            const forum = await ForumModel.getForumSlug(slug);
            if (!forum) {
                return reply.status(404).send({ mesage : 'cant find forum' });
            } else {
                return reply.status(200).send(result);
            }
		}

		result = forumSerializer(result);
		// console.log('forum getUsers',result);
		return reply.status(200).send(result);

	} 
}


export default new ForumController;