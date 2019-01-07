import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class PostModel {
    
    createNewPost (columns, values) {
        console.log(columns);
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
        const query = 'INSERT INTO posts ' + c + ' VALUES ' + v + ' RETURNING *';
        return dbInstance.one(query, values);
    }

    getPostByIdAndThreadId (id, threadId) {
        return dbInstance.oneOrNone('SELECT * FROM posts WHERE id=$1 AND thread=$2', [id, threadId])
    }
}

export default new PostModel;