CREATE EXTENSION IF NOT EXISTS CITEXT;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS forums CASCADE;
DROP TABLE IF EXISTS threads CASCADE;
DROP TABLE IF EXISTS forumusers CASCADE;
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP SEQUENCE IF EXISTS posts_id_sequance;


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
	"user"			CITEXT			NOT NULL REFERENCES users (nickname)
);

CREATE UNLOGGED TABLE IF NOT EXISTS threads (
	author			CITEXT					 NOT NULL REFERENCES users (nickname),
	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),		
	forum			CITEXT					 NOT NULL REFERENCES forums (slug),
	id				BIGSERIAL				 NOT NULL PRIMARY KEY,
	"message"		VARCHAR					 NOT NULL,
	slug			CITEXT					 UNIQUE DEFAULT NULL,
	title			VARCHAR					 NOT NULL,
	votes			INTEGER					 NOT NULL DEFAULT 0
);

CREATE UNLOGGED TABLE IF NOT EXISTS forumusers (
	forumslug            CITEXT     				 NOT NULL REFERENCES forums (slug),
	usernickname         CITEXT COLLATE ucs_basic    NOT NULL REFERENCES users (nickname)
);

CREATE UNLOGGED TABLE IF NOT EXISTS posts (
	author			CITEXT					 NOT NULL REFERENCES users (nickname), 
	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 	
	forum			CITEXT					 NOT NULL REFERENCES forums (slug), 
	id				BIGINT					 NOT NULL PRIMARY KEY,
	"isEdited"		BOOLEAN					 NOT NULL DEFAULT FALSE,
	"message"		VARCHAR					 NOT NULL,
	parent 			BIGINT					 REFERENCES posts (id) NULL,
	thread			BIGINT					 NOT NULL REFERENCES threads (id), 
	pathtopost		BIGINT					 ARRAY 
);

CREATE SEQUENCE posts_id_sequance START 1;

CREATE UNLOGGED TABLE IF NOT EXISTS votes (
	voice            SMALLINT   NOT NULL,
	thread         	 BIGINT     NOT NULL REFERENCES threads (id),
	nickname		 CITEXT		NOT NULL REFERENCES users (nickname)
);

ALTER TABLE votes 
ADD CONSTRAINT uniqueThreadNickname UNIQUE(nickname, thread);

ALTER TABLE forumusers
ADD CONSTRAINT unique_forumuser_pair UNIQUE (forumslug, usernickname);