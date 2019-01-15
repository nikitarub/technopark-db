-- CREATE EXTENSION IF NOT EXISTS CITEXT;

-- DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS forums CASCADE;
-- DROP TABLE IF EXISTS threads CASCADE;
-- DROP TABLE IF EXISTS forumusers CASCADE;
-- DROP TABLE IF EXISTS votes CASCADE;
-- DROP TABLE IF EXISTS posts CASCADE;
-- DROP SEQUENCE IF EXISTS posts_id_sequance;


-- CREATE UNLOGGED TABLE IF NOT EXISTS users (
-- 	nickname CITEXT COLLATE ucs_basic	NOT NULL PRIMARY KEY,
-- 	fullname VARCHAR 					NOT NULL,
-- 	email    CITEXT     				NOT NULL UNIQUE,
-- 	about    TEXT       				NOT NULL DEFAULT ''
-- );

-- CREATE UNLOGGED TABLE IF NOT EXISTS forums (
-- 	posts	        INTEGER 		NOT NULL DEFAULT 0,
-- 	slug			CITEXT			NOT NULL PRIMARY KEY,
-- 	threads			INTEGER			NOT NULL DEFAULT 0,
-- 	title			VARCHAR			NOT NULL,
-- 	"user"			CITEXT			NOT NULL REFERENCES users (nickname)
-- );

-- CREATE UNLOGGED TABLE IF NOT EXISTS threads (
-- 	author			CITEXT					 NOT NULL REFERENCES users (nickname),
-- 	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),		
-- 	forum			CITEXT					 NOT NULL REFERENCES forums (slug),
-- 	id				BIGSERIAL				 NOT NULL PRIMARY KEY,
-- 	"message"		VARCHAR					 NOT NULL,
-- 	slug			CITEXT					 UNIQUE DEFAULT NULL,
-- 	title			VARCHAR					 NOT NULL,
-- 	votes			INTEGER					 NOT NULL DEFAULT 0
-- );

-- CREATE UNLOGGED TABLE IF NOT EXISTS forumusers (
-- 	forumslug            CITEXT     				 NOT NULL REFERENCES forums (slug),
-- 	usernickname         CITEXT COLLATE ucs_basic    NOT NULL REFERENCES users (nickname)
-- );

-- CREATE UNLOGGED TABLE IF NOT EXISTS posts (
-- 	author			CITEXT					 NOT NULL REFERENCES users (nickname), 
-- 	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 	
-- 	forum			CITEXT					 NOT NULL REFERENCES forums (slug), 
-- 	id				BIGINT					 NOT NULL PRIMARY KEY,
-- 	"isEdited"		BOOLEAN					 NOT NULL DEFAULT FALSE,
-- 	"message"		VARCHAR					 NOT NULL,
-- 	parent 			BIGINT					 REFERENCES posts (id) NULL,
-- 	thread			BIGINT					 NOT NULL REFERENCES threads (id), 
-- 	pathtopost		BIGINT					 ARRAY 
-- );

-- CREATE SEQUENCE posts_id_sequance START 1;

-- CREATE UNLOGGED TABLE IF NOT EXISTS votes (
-- 	voice            SMALLINT   NOT NULL,
-- 	thread         	 BIGINT     NOT NULL REFERENCES threads (id),
-- 	nickname		 CITEXT		NOT NULL REFERENCES users (nickname)
-- );

-- ALTER TABLE votes 
-- ADD CONSTRAINT uniqueThreadNickname UNIQUE(nickname, thread);

-- ALTER TABLE forumusers
-- ADD CONSTRAINT unique_forumuser_pair UNIQUE (forumslug, usernickname);

CREATE EXTENSION IF NOT EXISTS CITEXT;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS forums CASCADE;
DROP TABLE IF EXISTS threads CASCADE;
DROP TABLE IF EXISTS forumusers CASCADE;
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP SEQUENCE IF EXISTS posts_id_sequance;
DROP INDEX IF EXISTS idx_threads_slug_id;


CREATE UNLOGGED TABLE IF NOT EXISTS users (
	nickname CITEXT COLLATE ucs_basic	NOT NULL PRIMARY KEY,
	fullname VARCHAR 					NOT NULL,
	email    CITEXT     				NOT NULL UNIQUE,
	about    TEXT       				NOT NULL DEFAULT ''
);

CREATE UNLOGGED TABLE IF NOT EXISTS forums (
	posts	        INTEGER 		NOT NULL DEFAULT 0,
	slug			CITEXT			NOT NULL PRIMARY KEY,
	threads			INTEGER			NOT NULL DEFAULT 0,
	title			VARCHAR			NOT NULL,
	"user"			CITEXT			NOT NULL
);

CREATE UNLOGGED TABLE IF NOT EXISTS threads (
	author			CITEXT					 NOT NULL,
	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),		
	forum			CITEXT					 NOT NULL,
	id				BIGSERIAL				 NOT NULL PRIMARY KEY,
	"message"		VARCHAR					 NOT NULL,
	slug			CITEXT					 UNIQUE DEFAULT NULL,
	title			VARCHAR					 NOT NULL,
	votes			INTEGER					 NOT NULL DEFAULT 0
);

CREATE UNLOGGED TABLE IF NOT EXISTS forumusers (
	forumslug            CITEXT     				 NOT NULL,
	usernickname         CITEXT COLLATE ucs_basic    NOT NULL
);

CREATE UNLOGGED TABLE IF NOT EXISTS posts (
	author			CITEXT					 NOT NULL,
	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 	
	forum			CITEXT					 NOT NULL,
	id				BIGINT					 NOT NULL PRIMARY KEY,
	"isEdited"		BOOLEAN					 NOT NULL DEFAULT FALSE,
	"message"		VARCHAR					 NOT NULL,
	parent 			BIGINT					 NULL,
	thread			BIGINT					 NOT NULL,
	pathtopost		BIGINT					 ARRAY 
);

CREATE SEQUENCE posts_id_sequance START 1;

CREATE UNLOGGED TABLE IF NOT EXISTS votes (
	voice            SMALLINT   NOT NULL,
	thread         	 BIGINT     NOT NULL,
	nickname		 CITEXT		NOT NULL
);

ALTER TABLE votes 
ADD CONSTRAINT uniqueThreadNickname UNIQUE(nickname, thread);

ALTER TABLE forumusers
ADD CONSTRAINT unique_forumuser_pair UNIQUE (forumslug, usernickname);


-- PREPARE get_nickname_statement (text) AS 
-- 	SELECT nickname FROM users WHERE nickname=$1;

-- PREPARE get_post_statement (int, int) AS 
-- 	SELECT * FROM posts WHERE id=$1 AND thread=$2;


ALTER TABLE posts SET (autovacuum_enabled = false);
ALTER TABLE threads SET (autovacuum_enabled = false);
ALTER TABLE votes SET (autovacuum_enabled = false);
ALTER TABLE forumusers SET (autovacuum_enabled = false);
ALTER TABLE forums SET (autovacuum_enabled = false);
ALTER TABLE users SET (autovacuum_enabled = false);

-- CREATE UNIQUE INDEX IF NOT EXISTS idx_threads_slug_id ON threads (slug, id);
-- CREATE INDEX IF NOT EXISTS index_posts_thread_id ON posts (thread, id);
-- CREATE INDEX IF NOT EXISTS users_nickname_index ON users (nickname);

CREATE UNIQUE INDEX IF NOT EXISTS index_users_email ON users(email);
 
CREATE INDEX IF NOT EXISTS index_forums_user ON forums("user");
 
CREATE INDEX IF NOT EXISTS index_threads_forum_created ON threads("created",forum);
 
CREATE INDEX IF NOT EXISTS index_votes_cover ON votes(voice, thread, nickname);
 
CREATE INDEX IF NOT EXISTS index_posts_thread_parent_id ON posts(id, parent, thread); 
CREATE INDEX IF NOT EXISTS index_posts_thread_id ON posts(id, thread); 
CREATE INDEX IF NOT EXISTS index_posts_thread_path ON posts(thread, pathtopost); 
