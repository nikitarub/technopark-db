CREATE EXTENSION IF NOT EXISTS CITEXT;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS forums CASCADE;
DROP TABLE IF EXISTS threads CASCADE;
DROP TABLE IF EXISTS forumusers CASCADE;
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE IF NOT EXISTS users (
	nickname CITEXT COLLATE ucs_basic	NOT NULL PRIMARY KEY,
	fullname VARCHAR 					NOT NULL,
	email    CITEXT     				NOT NULL UNIQUE,
	about    TEXT       				NOT NULL DEFAULT ''
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
	forumslug            CITEXT     				 NOT NULL REFERENCES forums (slug),
	usernickname         CITEXT COLLATE ucs_basic    NOT NULL REFERENCES users (nickname)
);

CREATE TABLE IF NOT EXISTS posts (
	author			CITEXT					 NOT NULL REFERENCES users (nickname), --
	"created"  	    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), --		
	forum			CITEXT					 NOT NULL REFERENCES forums (slug), --
	id				BIGSERIAL				 NOT NULL PRIMARY KEY, --
	"isEdited"		BOOLEAN					 NOT NULL DEFAULT FALSE, --
	"message"		VARCHAR					 NOT NULL, --
	parent 			BIGINT					 REFERENCES posts (id), --
	thread			BIGINT					 NOT NULL REFERENCES threads (id), -- 
	pathtopost		BIGINT					 ARRAY
);

CREATE TABLE IF NOT EXISTS votes (
	voice            SMALLINT   NOT NULL,
	thread         	 BIGINT     NOT NULL REFERENCES threads (id),
	nickname		 CITEXT		NOT NULL REFERENCES users (nickname)
);

ALTER TABLE votes 
ADD CONSTRAINT uniqueThreadNickname UNIQUE(nickname, thread);

ALTER TABLE forumusers
ADD CONSTRAINT unique_forumuser_pair UNIQUE (forumslug, usernickname);



-- CREATE OR REPLACE FUNCTION set_is_edited_status() RETURNS TRIGGER AS $$
-- 	BEGIN

--   		UPDATE posts 
--   		SET "isEdited" = TRUE
--   		WHERE id = NEW.id;

--   		RETURN NULL;
-- 	END;
-- $$ LANGUAGE plpgsql;

-- DROP TRIGGER IF EXISTS tr_set_is_edited_status ON posts;

-- CREATE TRIGGER tr_set_is_edited_status AFTER UPDATE OF "message" ON posts FOR EACH ROW EXECUTE PROCEDURE set_is_edited_status();



CREATE OR REPLACE FUNCTION add_path_to_post() RETURNS TRIGGER AS $add_path_to_post$
    DECLARE
        parent_path BIGINT[];
    BEGIN
        IF (NEW.parent IS NULL) OR (NEW.parent = 0) THEN
            NEW.pathtopost := NEW.pathtopost || NEW.id;
        ELSE
            SELECT pathtopost FROM posts
                WHERE id = NEW.parent INTO parent_path;
            NEW.pathtopost := NEW.pathtopost || parent_path || NEW.id;
        END IF;
        RETURN NEW;
    END;
$add_path_to_post$ LANGUAGE  plpgsql;

DROP TRIGGER IF EXISTS tr_add_path_to_post ON posts;

CREATE TRIGGER tr_add_path_to_post BEFORE INSERT ON posts FOR EACH ROW EXECUTE PROCEDURE add_path_to_post();
