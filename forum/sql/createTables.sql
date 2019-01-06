CREATE EXTENSION IF NOT EXISTS CITEXT;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS forums CASCADE;
DROP TABLE IF EXISTS threads CASCADE;
DROP TABLE IF EXISTS forumusers CASCADE;


CREATE TABLE IF NOT EXISTS users (
	nickname CITEXT 	NOT NULL PRIMARY KEY,
	fullname VARCHAR 	NOT NULL,
	email    CITEXT     NOT NULL UNIQUE,
	about    TEXT       NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS forums (
	posts	        INTEGER 		NOT NULL DEFAULT 0,
	slug			CITEXT			NOT NULL PRIMARY KEY,
	threads			INTEGER			NOT NULL DEFAULT 0,
	title			VARCHAR			NOT NULL,
	"user"			CITEXT			NOT NULL REFERENCES users (nickname)
);

CREATE TABLE IF NOT EXISTS threads (
	author			CITEXT					 NOT NULL REFERENCES users (nickname),
	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),		
	forum			CITEXT					 NOT NULL REFERENCES forums (slug),
	id				BIGSERIAL				 NOT NULL PRIMARY KEY,
	"message"		VARCHAR					 NOT NULL,
	slug			CITEXT					 UNIQUE DEFAULT NULL,
	title			VARCHAR					 NOT NULL,
	votes			INTEGER					 NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS forumusers (
	forumslug            CITEXT     NOT NULL UNIQUE REFERENCES forums (slug),
	usernickname         CITEXT     NOT NULL UNIQUE REFERENCES users (nickname)
);

