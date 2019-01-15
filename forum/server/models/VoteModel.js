import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class VoteModel {

    async vote (voice, threadId, nickname) {
        try {
            return await dbInstance.oneOrNone(`INSERT INTO votes (voice, thread, nickname) VALUES ($1, $2, (SELECT nickname FROM users WHERE nickname='${nickname}')) ON CONFLICT ON CONSTRAINT uniqueThreadNickname DO 
            UPDATE SET voice=$1 WHERE votes.voice<>$1 RETURNING *, (xmax::text::int > 0) as existed`, [voice, threadId]); 
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN CREATING USER');
            console.log(error);
        }
    }
}


export default new VoteModel; 
