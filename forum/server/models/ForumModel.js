import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class ForumModel {

    getForumBySlug (slug) {
        return dbInstance.oneOrNone('SELECT * FROM forums WHERE slug=$1', [slug])
    }

    createNewForum (newForumData = []) {
        return dbInstance.one('INSERT INTO forums (slug, title, "user") VALUES ($1, $2, $3) RETURNING *', newForumData);
    }

    getForumSlug (slug) {
        return dbInstance.oneOrNone('SELECT slug FROM forums WHERE slug=$1', [slug])
    }

    createForumUserPair(forumSlug, nickname) {
        return dbInstance.oneOrNone('INSERT INTO forumusers (forumslug, usernickname) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *', [forumSlug,nickname]); 
    }

    incrementThreads(slug) {
        return dbInstance.one('UPDATE forums SET threads = threads + 1 WHERE slug=$1 RETURNING *', [slug]);
    }

    incrementPosts(slug) {
        return dbInstance.one('UPDATE forums SET posts = posts + 1 WHERE slug=$1 RETURNING *', [slug]);
    }
}

export default new ForumModel; 