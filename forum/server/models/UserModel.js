import dbInstance, { pgp } from '../modules/DataBaseModule.js';
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

    createNewUser(newUserData = []) {
        return dbInstance.one('INSERT INTO users (nickname, fullname, about, email) VALUES ($1, $2, $3 ,$4) RETURNING *', newUserData);
    }

    updateUser(nickname,columns, keyValues) {

        const query = pgp.helpers.update(keyValues, columns, 'users') + " WHERE \"nickname\" = \'" +  nickname + "\' RETURNING *";
        // console.log(query);
        return dbInstance.oneOrNone(query);
    }

    // казалось бы масло малсляное, но это нужно чтобы получить имя именно так как оно было заисано
    /*
    казалось бы масло малсляное, но это нужно чтобы получить
    имя так как оно было записано в таблице users (не в верхнем или нижнем регистрах)
    */
    getUserNickname (nickname) {
        return dbInstance.oneOrNone('SELECT nickname FROM users WHERE nickname=$1', [nickname])
    }


} 

export default new UserModel;