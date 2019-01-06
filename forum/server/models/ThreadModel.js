import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class ThreadModel {
    
    createNewThread (columns, values) {
        console.log(columns),
        console.log(values);
        let c = '('; 
        let v = '(';
        for (let i =0 ; i < columns.length; i++) {
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
        const query = 'INSERT INTO threads ' + c + ' VALUES ' + v + ' RETURNING *';
        return dbInstance.one(query, values);
    }

    getThreadBySlug (slug) {
        return dbInstance.oneOrNone('SELECT * FROM threads WHERE slug=$1', [slug])
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
}

export default new ThreadModel;