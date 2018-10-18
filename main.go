package main

import (
	"database/sql"
	"log"
)

func main() {
	db, err := sql.Open("postgres", "user=docker password=docker1828 dbname=docker sslmode=disable")

	err = createTables(db)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

}
