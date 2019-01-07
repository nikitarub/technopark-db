import dbInstance, { pgp } from '../modules/DataBaseModule.js';

class VoteModel {

    vote (voice, threadId, nickname) {
        return dbInstance.oneOrNone(`INSERT INTO votes (voice, thread, nickname) VALUES ($1, $2, $3) ON CONFLICT ON CONSTRAINT uniqueThreadNickname DO 
        UPDATE SET voice=$1 WHERE votes.voice<>$1 RETURNING *, (xmax::text::int > 0) as existed`, [voice, threadId, nickname]); 
    }
}


export default new VoteModel; 
