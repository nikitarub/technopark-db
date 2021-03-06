import dbInstance, { pgp } from '../modules/DataBaseModule.js';
import 'babel-polyfill';
const PS = require('pg-promise').PreparedStatement;


const getNicknameStatement = new PS('get-nick', 'SELECT nickname FROM users WHERE nickname=$1');


class UserModel {

    getUserByNickname (nickname) {
        // oneOrNone возвращает нул если нет строк
        return dbInstance.oneOrNone('SELECT * FROM users WHERE nickname=$1', [nickname])
    }

    getUserByNicknameOrEmail (nick, mail) { // можно как-то не проходиться по всей таблице, а останавливатся как только нашли 1 вхождение
        const nickname = nick || '';
        const email = mail || '';
        // manyOrNone возвращает пустой массив если нет строк
        return dbInstance.manyOrNone('SELECT * FROM users WHERE nickname=$1 OR email=$2', [nickname, email]); 
    }

    async createNewUser(newUserData = []) {
        try {
            return await dbInstance.oneOrNone('INSERT INTO users (nickname, fullname, about, email) VALUES ($1, $2, $3 ,$4) ON CONFLICT DO NOTHING RETURNING *', newUserData);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING USER');
            console.log(error);
        }
    }

    async updateUser(nickname,columns, keyValues) {
        try {
            const query = pgp.helpers.update(keyValues, columns, {table: 'users'}, null, {emptyUpdate: 'conflict'}) + " WHERE \"nickname\" = \'" +  nickname + "\' RETURNING *";            
            return await dbInstance.oneOrNone(query);
        }
        catch (error) {
            console.log(error);
        }
    }

    // казалось бы масло малсляное, но это нужно чтобы получить имя именно так как оно было заисано
    /*
    казалось бы масло масляное, но это нужно чтобы получить
    имя так как оно было записано в таблице users (не в верхнем или нижнем регистрах)
    */
    getUserNickname (nickname) {
        return dbInstance.oneOrNone(getNicknameStatement, [nickname])
    }


} 

export default new UserModel;