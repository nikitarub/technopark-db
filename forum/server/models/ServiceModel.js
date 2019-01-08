import dbInstance, { pgp } from '../modules/DataBaseModule.js';
import 'babel-polyfill';

class ServiceModel {
    
    async countAll() {
        let forum = await dbInstance.one('SELECT COUNT(*) FROM forums');
        let post = await dbInstance.one('SELECT COUNT(*) FROM posts');
        let thread = await dbInstance.one('SELECT COUNT(*) FROM threads');
        let user = await dbInstance.one('SELECT COUNT(*) FROM users');
        const result = {
            "forum": parseInt(forum.count),
            "post": parseInt(post.count),
            "thread": parseInt(thread.count),
            "user": parseInt(user.count)
        }
        return result;
    }

    async clearAll() {

        let forum = await dbInstance.none('TRUNCATE TABLE forums CASCADE');
        let post = await dbInstance.none('TRUNCATE TABLE posts CASCADE');
        let thread = await dbInstance.none('TRUNCATE TABLE threads CASCADE');
        let user = await dbInstance.none('TRUNCATE TABLE users CASCADE');
        const result = {
            "forum": forum,
            "post": post,
            "thread": thread,
            "user": user
        }
        return result;
    }
}

export default new ServiceModel;