import dbInstance, { pgp } from '../modules/DataBaseModule.js';
const PS = require('pg-promise').PreparedStatement;

const getPostByIdAndThreadIdStatment = new PS('get-post', 'SELECT * FROM posts WHERE id=$1 AND thread=$2');

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

    async createNewPostsByQuery (query) {
        // console.log(query);
        try {
            return  await dbInstance.manyOrNone(query);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING POST NO AUTHOR');
            console.log(error);
        }
    }

    // async transactTest (query)

    getPostByIdAndThreadId (id, threadId) {
        return dbInstance.oneOrNone(getPostByIdAndThreadIdStatment, [id, threadId])
    }

    getPostById (id) {
        return dbInstance.oneOrNone('SELECT * FROM posts WHERE id=$1', [id]);
    }

    getIdForPost () {
        return dbInstance.one("SELECT nextval('posts_id_sequance')"); 
    }

    updatePost (message, id) {
        return dbInstance.oneOrNone('UPDATE posts SET "isEdited"=TRUE, "message"=$1 WHERE id=$2 RETURNING *', [message,id]);
    }

    getPathToPost (id) {
        return dbInstance.oneOrNone('SELECT pathtopost FROM posts WHERE id=$1', [id]);
    }

    
    async flatSort (slugOrId, isId, queryParams) {
        try {

            const threadId = isId ? slugOrId : `(SELECT id FROM threads WHERE slug='${slugOrId}')`;
            // console.log(threadId);

            if ( queryParams.since ) {
                if (queryParams.desc) {
                    return await dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1:raw AND id<$2
                    ORDER BY "created" DESC, id DESC LIMIT $3`, 
                    [
                        threadId,
                        queryParams.since,
                        queryParams.limit
                    ]);
                } else {
                    return await dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1:raw AND id>$2
                    ORDER BY "created" ASC, id ASC LIMIT $3`, 
                    [
                        threadId,
                        queryParams.since,
                        queryParams.limit
                    ]);
                }
            } else {
                if (queryParams.desc) {
                    return await dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1:raw
                    ORDER BY "created" DESC, id DESC LIMIT $3`, 
                    [
                        threadId,
                        queryParams.since,
                        queryParams.limit
                    ]);
                } else {
                    return await dbInstance.manyOrNone(`SELECT * FROM posts WHERE thread=$1:raw
                    ORDER BY "created" ASC, id ASC LIMIT $3`, 
                    [
                        threadId,
                        queryParams.since,
                        queryParams.limit
                    ]);
                }
            }
        } catch (error) {
            console.log('-----------------------');
            console.log('Error in flat sort');
            console.log(error);
        }
    }

    async treeSort (slugOrId, isId, queryParams) {

        try {
            const threadId = isId ? slugOrId : `(SELECT id FROM threads WHERE slug='${slugOrId}')`;
            // console.log(threadId);
            const pathSortRule = queryParams.desc ? 'pathtopost DESC' : 'pathtopost ASC';
            if (queryParams.since && !queryParams.desc) {
                return await dbInstance.manyOrNone(`SELECT * FROM posts
                WHERE thread=$1:raw AND pathtopost > (SELECT pathtopost FROM posts WHERE id=$2)
                ORDER BY $3:raw LIMIT $4`,
                [
                    threadId,
                    queryParams.since,
                    pathSortRule,
                    queryParams.limit
                ]);   
            } else if (queryParams.since && queryParams.desc) {
                return await dbInstance.manyOrNone(`SELECT * FROM posts
                WHERE thread=$1:raw AND pathtopost < (SELECT pathtopost FROM posts WHERE id=$2)
                ORDER BY $3:raw LIMIT $4`,
                [
                    threadId,
                    queryParams.since,
                    pathSortRule,
                    queryParams.limit
                ]);   
            } else if (!queryParams.since) {
                return  await dbInstance.manyOrNone(`SELECT * FROM posts
                WHERE thread=$1:raw 
                ORDER BY $2:raw LIMIT $3`,
                [
                    threadId,
                    pathSortRule,
                    queryParams.limit
                ]);   
            }

        } catch (error) {
            console.log('-----------------------');
            console.log('Error in tree sort');
            console.log(error);
        }
    }

    async parentTreeSort (slugOrId, isId, queryParams) {

        try {
            const threadId = isId ? slugOrId : `(SELECT id FROM threads WHERE slug='${slugOrId}')`;
            // console.log(threadId);
            const pathSortRule = queryParams.desc ? 'pid.parent_id DESC, pathtopost ASC' : 'pathtopost ASC';
            const idSortRule = queryParams.desc ? 'id DESC' : 'id ASC'
            if (queryParams.since && !queryParams.desc) {
                return dbInstance.manyOrNone(
                    `SELECT * FROM posts
                    JOIN (
                        SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1:raw AND pathtopost[1] > (SELECT pathtopost[1] FROM posts WHERE id=$2)
                        ORDER BY $3:raw LIMIT $4
                    ) AS pid
                    ON (thread=$1:raw AND pid.parent_id=pathtopost[1])
                    ORDER BY $5:raw
                    `,
                    [
                        threadId,
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
                        SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1:raw AND pathtopost[1] < (SELECT pathtopost[1] FROM posts WHERE id=$2)
                        ORDER BY $3:raw LIMIT $4
                    ) AS pid
                    ON (thread=$1:raw AND pid.parent_id=pathtopost[1])
                    ORDER BY $5:raw
                    `,
                    [
                        threadId,
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
                        SELECT id AS parent_id FROM posts WHERE parent IS NULL AND thread=$1:raw
                        ORDER BY $3:raw LIMIT $4
                    ) AS pid
                    ON (thread=$1:raw AND pid.parent_id=pathtopost[1])
                    ORDER BY $5:raw
                    `,
                    [
                        threadId,
                        queryParams.since,
                        idSortRule,
                        queryParams.limit,
                        pathSortRule
                    ]
                );    
            }
        } catch (error) {
            console.log('-----------------------');
            console.log('Error in tree sort');
            console.log(error);
        }
    }
}

export default new PostModel;