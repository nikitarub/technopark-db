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
        return dbInstance.oneOrNone('INSERT INTO forumusers (forumslug, usernickname) VALUES ($1, $2) ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *', [forumSlug,nickname]); 
    }

    incrementThreads(slug) {
        return dbInstance.one('UPDATE forums SET threads = threads + 1 WHERE slug=$1 RETURNING *', [slug]);
    }

    incrementPosts(slug) {
        return dbInstance.one('UPDATE forums SET posts = posts + 1 WHERE slug=$1 RETURNING *', [slug]);
    }

    getUsers (slug, queryParams) {
        let query;
        console.log(queryParams);
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
    // getUsers(slug, queryParams) {
    //         // pre-format WHERE conditions
    //         let whereCondition;
    //         if (queryParams.since && queryParams.desc) {
    //             whereCondition = pgp.as.format(` WHERE nickname IN 
    //             (SELECT usernickname FROM forumusers WHERE forumslug = $1)
    //             AND nickname < $2 `, [slug, queryParams.since]);
    //         } else if (queryParams.since && !queryParams.desc) {
    //             whereCondition = pgp.as.format(`WHERE nickname IN 
    //             (SELECT usernickname FROM forumusers WHERE forumslug = $1)
    //             AND nickname > $2 `, [slug, queryParams.since]);
    //         } else {
    //             whereCondition = pgp.as.format(` WHERE nickname IN 
    //             (SELECT usernickname FROM forumusers WHERE forumslug = $1)`, [slug]);
    //         }
    //         return dbInstance.manyOrNone(`
    //             SELECT about, email, fullname, nickname 
    //             FROM users $1:raw 
    //             ORDER BY $2:raw LIMIT $3`,
    //             [whereCondition.toString(),
    //             (queryParams.desc ? 'nickname DESC' : 'nickname ASC'),
    //             queryParams.limit]);

    // }


}

export default new ForumModel; 