const pgp = require('pg-promise')();

const dbOptions = {
    host: 'localhost',
    port: 5432,
    database: 'forum',
    user: 'ermakforum',
    password: '123'
}

const dbInstance = pgp(dbOptions);
export default dbInstance;
