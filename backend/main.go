package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func main() {
    fmt.Println("Server is running on port 60")
    http.HandleFunc("/", handler)
    http.ListenAndServe(":60", nil)
}