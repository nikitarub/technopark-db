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
}

export default new ThreadModel;