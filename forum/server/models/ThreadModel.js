import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class ThreadModel {
    
    async createNewThread (columns, values) {
        let remember;
        let c = '('; 
        let v = '(';
        for (let i =0 ; i < columns.length; i++) {
            if (columns[i] === 'slug') {
                remember = i;
            }
            c += columns[i];
            if (i !== columns.length - 1) {
                c += ', ';
            }
        }
        c += ')';

        for (let i =0 ; i < values.length; i++) {
            v += '$' + (i+1).toString();
            if (i !== columns.length - 1) {
                v += ', ';
            }
        }
        v += ')';
        try {
            const query = 'INSERT INTO threads ' + c + ' VALUES ' + v + ` ON CONFLICT DO NOTHING RETURNING *`;
            return await dbInstance.oneOrNone(query, values);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING THREAD');
            console.log(error);
        }
    }

    getThreadBySlug (slug) {
        return dbInstance.oneOrNone('SELECT * FROM threads WHERE slug=$1', [slug])
    }

    getThreadById (id) {
        return dbInstance.oneOrNone('SELECT * FROM threads WHERE id=$1', [id])
    }

    getThreadsByForumSlug (forumSlug, queryParams) {
        queryParams.desc = queryParams.desc === 'true'
        if (queryParams.since && !queryParams.desc) {
            return dbInstance.manyOrNone('SELECT * FROM threads WHERE forum=$1 AND "created">=$2 ORDER BY $3:raw LIMIT $4', 
            [
                forumSlug,
                queryParams.since,
                (queryParams.desc ? '"created" DESC' : '"created" ASC'),
                queryParams.limit
            ]);
        } else if (queryParams.since && queryParams.desc) {
            return dbInstance.manyOrNone('SELECT * FROM threads WHERE forum=$1 AND "created"<=$2 ORDER BY $3:raw LIMIT $4', 
            [
                forumSlug,
                queryParams.since,
                (queryParams.desc ? '"created" DESC' : '"created" ASC'),
                queryParams.limit
            ]);
        } else if (!queryParams.since) {
            return dbInstance.manyOrNone('SELECT * FROM threads WHERE forum=$1 ORDER BY $2:raw LIMIT $3', 
            [
                forumSlug,
                (queryParams.desc ? '"created" DESC' : '"created" ASC'),
                queryParams.limit
            ]);
        }
    }

    incrementVotesBySlug (slug, voice) {
        return dbInstance.one('UPDATE threads SET votes = votes + $2 WHERE slug=$1 RETURNING *', [slug,voice]);
    }

    incrementVotesById (id, voice) {
        return dbInstance.one('UPDATE threads SET votes = votes + $2 WHERE id=$1 RETURNING *', [id,voice]);
    }

    updateThread (slug, columns, keyValues) {
        const query = pgp.helpers.update(keyValues, columns, {table: 'threads'},null, {emptyUpdate: 'conflict'}) + " WHERE \"slug\" = \'" +  slug + "\' RETURNING *";
        return dbInstance.oneOrNone(query);
    }

}

export default new ThreadModel;
