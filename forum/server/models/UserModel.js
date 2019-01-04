import dbInstance from '../modules/DataBaseModule.js';
console.log(dbInstance);
class UserModel {

    getUserByNickname (nickname) {
        return dbInstance.oneOrNone('SELECT * FROM users WHERE nickname=$1', [nickname])
    }
} 

export default new UserModel;