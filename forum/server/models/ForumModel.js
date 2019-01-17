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

    async createForumUserPair(forumSlug, nickname) {
        // console.log('SEARCH',forumSlug, nickname);
        try {
            return await dbInstance.oneOrNone(`INSERT INTO forumusers (forumslug, usernickname) VALUES ($1,
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

    incrementPosts(slug, cnt) {
        return dbInstance.oneOrNone(`UPDATE forums SET posts = posts + $2 WHERE slug=$1 RETURNING *`, [slug,cnt]);
    }

    async getUsers (slug, queryParams) {
        try {
            slug = `(SELECT slug FROM forums WHERE slug='${slug}')`
            let query;
            if (queryParams.since && !queryParams.desc) {
                query = pgp.as.format(`
                SELECT * FROM forumusers AS FU
                JOIN users AS U ON FU.usernickname = U.nickname
                WHERE FU.forumslug=$1:raw AND U.nickname>$2
                `,[slug, queryParams.since]);
            } else if (queryParams.since && queryParams.desc){
                query = pgp.as.format(`
                SELECT * FROM forumusers AS FU
                JOIN users AS U ON FU.usernickname = U.nickname
                WHERE FU.forumslug=$1:raw AND U.nickname<$2
                `, [slug, queryParams.since]);
            } else {
                query = pgp.as.format(`
                SELECT * FROM forumusers AS FU
                JOIN users AS U ON FU.usernickname = U.nickname
                WHERE FU.forumslug=$1:raw`, [slug]);
            }
    
            return await dbInstance.manyOrNone(`$1:raw 
                ORDER BY $2:raw LIMIT $3`,
                [
                    query.toString(),
                    (queryParams.desc ? 'U.nickname DESC' : 'U.nickname ASC'),
                    queryParams.limit
    
                ]
                )
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN getUsers');
            console.log(error);
        }
        // slug = `(SELECT slug FROM forums WHERE slug='${slug}')`
        // let query;
        // if (queryParams.since && !queryParams.desc) {
        //     query = pgp.as.format(`
        //     SELECT * FROM forumusers AS FU
        //     JOIN users AS U ON FU.usernickname = U.nickname
        //     WHERE FU.forumslug=$1:raw AND U.nickname>$2
        //     `,[slug, queryParams.since]);
        // } else if (queryParams.since && queryParams.desc){
        //     query = pgp.as.format(`
        //     SELECT * FROM forumusers AS FU
        //     JOIN users AS U ON FU.usernickname = U.nickname
        //     WHERE FU.forumslug=$1:raw AND U.nickname<$2
        //     `, [slug, queryParams.since]);
        // } else {
        //     query = pgp.as.format(`
        //     SELECT * FROM forumusers AS FU
        //     JOIN users AS U ON FU.usernickname = U.nickname
        //     WHERE FU.forumslug=$1:raw`, [slug]);
        // }

        // return dbInstance.manyOrNone(`$1:raw 
        //     ORDER BY $2:raw LIMIT $3`,
        //     [
        //         query.toString(),
        //         (queryParams.desc ? 'U.nickname DESC' : 'U.nickname ASC'),
        //         queryParams.limit

        //     ]
        //     )
    }
}

export default new ForumModel; 