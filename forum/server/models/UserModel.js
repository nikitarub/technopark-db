import dbInstance, { pgp } from '../modules/DataBaseModule.js';
class UserModel {

    getUserByNickname (nickname) {
        return dbInstance.oneOrNone('SELECT * FROM users WHERE nickname=$1', [nickname])
    }

    getUserByNicknameOrEmail (nick, mail) { // можно как-то не проходиться по всей таблице, а останавливатся как только нашли 1 вхождение
        const nickname = nick || '';
        const email = mail || '';
        return dbInstance.manyOrNone('SELECT * FROM users WHERE nickname=$1 OR email=$2', [nickname, email]); 
    }

    createNewUser(newUserData = []) {
        return dbInstance.one('INSERT INTO users (nickname, fullname, about, email) VALUES ($1, $2, $3 ,$4) RETURNING *', newUserData);
    }

    updateUser(nickname,columns, keyValues) {

        const query = pgp.helpers.update(keyValues, columns, 'users') + " WHERE \"nickname\" = \'" +  nickname + "\' RETURNING *";
        console.log(query);
        return dbInstance.oneOrNone(query);
    }


} 

export default new UserModel;