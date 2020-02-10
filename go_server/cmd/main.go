package main

import (
	"context"
	"errors"
	pb "github.com/s-k0bayash1/grpc_practice/proto"
	"google.golang.org/grpc"
	"log"
	"net"
)

func main() {
	port, err := net.Listen("tcp", ":19003")
	if err != nil {
		log.Fatalln(err)
	}
	server := grpc.NewServer()
	myGreeterService := &MyGreeterService{}
	pb.RegisterGreeterServer(server, myGreeterService)
	log.Println("server started")
	server.Serve(port)
}

type MyGreeterService struct {
	pb.UnimplementedGreeterServer
}

func (s MyGreeterService) HelloWorld(_ context.Context, req *pb.HelloRequest) (*pb.HelloResponse, error) {
	log.Println("service:helloworld start")
	if req.Name == "" {
		return nil, errors.New("name is necessary")
	}
	return &pb.HelloResponse{
		Message:              "hello " + req.Name,
	}, nil
}
