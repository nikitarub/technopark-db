import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class ForumModel {

    getForumBySlug (slug) {
        return dbInstance.oneOrNone('SELECT * FROM forums WHERE slug=$1', [slug])
    }

    createNewForum (newForumData = []) {
        return dbInstance.one('INSERT INTO forums (slug, title, "user") VALUES ($1, $2, $3) RETURNING *', newForumData);
    }
}

export default new ForumModel; 