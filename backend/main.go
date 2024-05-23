package main

import (
	"context"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/gin-gonic/gin"
)

func main() {
		// Load the Shared AWS Configuration (~/.aws/config)
		cfg, err := config.LoadDefaultConfig(context.TODO())
		if err != nil {
			log.Fatal(err)
		}
	
		// Create an Amazon S3 service client
		client := s3.NewFromConfig(cfg)
	
		// Get the first page of results for ListObjectsV2 for a bucket
		output, err := client.ListObjectsV2(context.TODO(), &s3.ListObjectsV2Input{
			Bucket: aws.String("cappa-bucket"),
		})
		if err != nil {
			log.Fatal(err)
		}
	
		log.Println("first page results:")
		for _, object := range output.Contents {
			log.Printf("key=%s size=%d", aws.ToString(object.Key), object.Size)
		}

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}

func getImages() {
	
}