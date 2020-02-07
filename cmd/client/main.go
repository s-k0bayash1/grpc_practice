package main

import (
	"context"
	pb "github.com/s-k0bayash1/grpc_practice/proto"
	"google.golang.org/grpc"
	"log"
	"os"
	"time"
)

func main() {
	conn, err := grpc.Dial("127.0.0.1:19003", grpc.WithInsecure())
	if err != nil {
		log.Fatalln(err)
		os.Exit(1)
	}
	defer conn.Close()
	client := pb.NewGreeterClient(conn)
	name := "world"
	if len(os.Args) > 1 {
		name = os.Args[1]
	}
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	r, err := client.HelloWorld(ctx, &pb.HelloRequest{
		Name: name,
	})
	if err != nil {
		log.Fatalln(err)
		os.Exit(1)
	}
	log.Println("Greeting: " + r.Message)
}