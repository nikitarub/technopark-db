package dbcommands

import (
	"database/sql"
	"io/ioutil"
)

func createTables(db *sql.DB) error {
	content, err := ioutil.ReadFile("create_tables.sql")
	if err != nil {
		return err
	}

	sqlCommand := string(content)
	_, err = db.Exec(sqlCommand)
	return err
}