import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class PostModel {
    
    createNewPost (columns, values) {
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
        const query = 'INSERT INTO posts ' + c + ' VALUES ' + v + ' RETURNING *';
        return dbInstance.one(query, values);
    }

    getPostByIdAndThreadId (id, threadId) {
        return dbInstance.oneOrNone('SELECT * FROM posts WHERE id=$1 AND thread=$2', [id, threadId])
    }

    flatSort (id, queryParams) {
        if ( queryParams.since ) {
            if (queryParams.desc) {
                return dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1 AND id<$2
                ORDER BY "created" DESC, id DESC LIMIT $3`, 
                [
                    id,
                    queryParams.since,
                    queryParams.limit
                ]);
            } else {
                return dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1 AND id>$2
                ORDER BY "created" ASC, id ASC LIMIT $3`, 
                [
                    id,
                    queryParams.since,
                    queryParams.limit
                ]);
            }
        } else {
            if (queryParams.desc) {
                return dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1
                ORDER BY "created" DESC, id DESC LIMIT $3`, 
                [
                    id,
                    queryParams.since,
                    queryParams.limit
                ]);
            } else {
                return dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1
                ORDER BY "created" ASC, id ASC LIMIT $3`, 
                [
                    id,
                    queryParams.since,
                    queryParams.limit
                ]);
            }
        }
    }

    treeSort (id, queryParams) {
        const pathSortRule = queryParams.desc ? 'pathtopost DESC' : 'pathtopost ASC';
        if (queryParams.since && !queryParams.desc) {
            return dbInstance.manyOrNone(`SELECT * FROM posts
            WHERE thread=$1 AND pathtopost > (SELECT pathtopost FROM posts WHERE id=$2)
            ORDER BY $3:raw LIMIT $4`,
            [
                id,
                queryParams.since,
                pathSortRule,
                queryParams.limit
            ]);   
        } else if (queryParams.since && queryParams.desc) {
            return dbInstance.manyOrNone(`SELECT * FROM posts
            WHERE thread=$1 AND pathtopost < (SELECT pathtopost FROM posts WHERE id=$2)
            ORDER BY $3:raw LIMIT $4`,
            [
                id,
                queryParams.since,
                pathSortRule,
                queryParams.limit
            ]);   
        } else if (!queryParams.since) {
            return dbInstance.manyOrNone(`SELECT * FROM posts
            WHERE thread=$1 
            ORDER BY $2:raw LIMIT $3`,
            [
                id,
                pathSortRule,
                queryParams.limit
            ]);   
        }

    }

    parentTreeSort (id, queryParams) {
        const pathSortRule = queryParams.desc ? 'pid.parent_id DESC, pathtopost ASC' : 'pathtopost ASC';
        const idSortRule = queryParams.desc ? 'id DESC' : 'id ASC'
        if (queryParams.since && !queryParams.desc) {
            return dbInstance.manyOrNone(
                `SELECT * FROM posts
                JOIN (
                    SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1 AND pathtopost[1] > (SELECT pathtopost[1] FROM posts WHERE id=$2)
                    ORDER BY $3:raw LIMIT $4
                ) AS pid
                ON (thread=$1 AND pid.parent_id=pathtopost[1])
                ORDER BY $5:raw
                `,
                [
                    id,
                    queryParams.since,
                    idSortRule,
                    queryParams.limit,
                    pathSortRule
                ]
            );
        } else if (queryParams.since && queryParams.desc){
            return dbInstance.manyOrNone(
                `SELECT * FROM posts
                JOIN (
                    SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1 AND pathtopost[1] < (SELECT pathtopost[1] FROM posts WHERE id=$2)
                    ORDER BY $3:raw LIMIT $4
                ) AS pid
                ON (thread=$1 AND pid.parent_id=pathtopost[1])
                ORDER BY $5:raw
                `,
                [
                    id,
                    queryParams.since,
                    idSortRule,
                    queryParams.limit,
                    pathSortRule
                ]
            );   
        } else if (!queryParams.since) {
            return dbInstance.manyOrNone(
                `SELECT * FROM posts
                JOIN (
                    SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1
                    ORDER BY $3:raw LIMIT $4
                ) AS pid
                ON (thread=$1 AND pid.parent_id=pathtopost[1])
                ORDER BY $5:raw
                `,
                [
                    id,
                    queryParams.since,
                    idSortRule,
                    queryParams.limit,
                    pathSortRule
                ]
            );    
        }
    }
}

export default new PostModel;