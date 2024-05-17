package main

import (
"net/http"
"github.com/gin-gonic/gin"
)

// album represents data about a record album.
type painting struct {
    ID     string  `json:"id"`
    Title  string  `json:"title"`
    Description string  `json:"description"`
    isSold  bool `json:"issold"`

  }

var albums = []album{
    {ID: "1", Title: "Blue Train", Description: "This is the description", isSold: true},
    {ID: "2", Title: "Jeru", Description: "This is the description", isSold: false},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Description: "This is the description", isSold: true},
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, albums)
}

func main() {
    router := gin.Default()
    router.GET("/albums", getAlbums)
    router.Run("localhost:8080")
}
