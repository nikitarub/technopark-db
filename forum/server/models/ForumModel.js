import dbInstance, { pgp } from '../modules/DataBaseModule.js';
import 'babel-polyfill';

class ForumModel {

    getForumBySlug (slug) {
        return dbInstance.oneOrNone('SELECT * FROM forums WHERE slug=$1', [slug])
    }

    async createNewForum (newForumData = []) {
        try {
            return await dbInstance.oneOrNone('INSERT INTO forums (slug, title, "user") VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING *', newForumData);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING THREAD');
            console.log(error);
        }
    }

    getForumSlug (slug) {
        return dbInstance.oneOrNone('SELECT slug FROM forums WHERE slug=$1', [slug])
    }

    async createForumUserPairUsingForum (forumSlug, nickname) {
        // console.log('ERROR IN createForumUserPairUsingForum');
        forumSlug = `(SELECT slug FROM forums WHERE slug='${forumSlug}')`;
        try {
            return await dbInstance.oneOrNone(`INSERT INTO forumusers (forumslug, usernickname) VALUES ($1:raw,
                (SELECT nickname FROM users WHERE nickname=$2))
                ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *`, [forumSlug,nickname]); 
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING THREAD');
            console.log(error);
        }
    }

    async createForumUserPairUsingThread (nickname, threadSlugOrId, isId) {
        // console.log('ERROR IN createForumUserPairUsingThread');
        const forumSlug = isId ? `(SELECT forum FROM threads WHERE id=${threadSlugOrId})` : `(SELECT forum FROM threads WHERE slug='${threadSlugOrId}')`;
        try {
            return await dbInstance.oneOrNone(`INSERT INTO forumusers (forumslug, usernickname) VALUES ($1:raw,
                (SELECT nickname FROM users WHERE nickname=$2))
                ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *`, [forumSlug,nickname]); 
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING THREAD');
            console.log(error);
        }
    }

    incrementThreads(slug) {
        return dbInstance.oneOrNone('UPDATE forums SET threads = threads + 1 WHERE slug=$1 RETURNING *', [slug]);
    }

    async incrementPosts(slugOrId, isId) {
        // console.log('ERROR IN incrementPosts');
        const forumSlug = isId ? `(SELECT forum FROM threads WHERE id=${slugOrId})` : `(SELECT forum FROM threads WHERE slug='${slugOrId}')`;
        try {
            return await dbInstance.oneOrNone(`UPDATE forums SET posts = posts + 1 WHERE slug=${forumSlug}`);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN INCREMENTING POSTS');
            console.log(error);
        }
    }

    getUsers (slug, queryParams) {
        let query;
        if (queryParams.since && !queryParams.desc) {
            query = pgp.as.format(`
            SELECT * FROM forumusers AS FU
            JOIN users AS U ON FU.usernickname = U.nickname
            WHERE FU.forumslug=$1 AND U.nickname>$2
            `,[slug, queryParams.since]);
        } else if (queryParams.since && queryParams.desc){
            query = pgp.as.format(`
            SELECT * FROM forumusers AS FU
            JOIN users AS U ON FU.usernickname = U.nickname
            WHERE FU.forumslug=$1 AND U.nickname<$2
            `, [slug, queryParams.since]);
        } else {
            query = pgp.as.format(`
            SELECT * FROM forumusers AS FU
            JOIN users AS U ON FU.usernickname = U.nickname
            WHERE FU.forumslug=$1`, [slug]);
        }

        return dbInstance.manyOrNone(`$1:raw 
            ORDER BY $2:raw LIMIT $3`,
            [
                query.toString(),
                (queryParams.desc ? 'U.nickname DESC' : 'U.nickname ASC'),
                queryParams.limit

            ]
            )
    }
}

export default new ForumModel; 