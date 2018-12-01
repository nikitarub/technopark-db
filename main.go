package main

import (
	"database/sql"
	"log"
	"net/http"
	"time"
	"github.com/gorilla/mux"
	"github.com/lib/pq"
	"github.com/Ermako27/technopark-db/db"
)

func main() {
	db, err := sql.Open("postgres", "user=docker password=docker1828 dbname=docker sslmode=disable")

	err = createTables(db)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

}
