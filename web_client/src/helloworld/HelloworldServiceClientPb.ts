/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  HelloRequest,
  HelloResponse} from './helloworld_pb';

export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoHelloWorld = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloResponse,
    (request: HelloRequest) => {
      return request.serializeBinary();
    },
    HelloResponse.deserializeBinary
  );

  helloWorld(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Greeter/HelloWorld',
      request,
      metadata || {},
      this.methodInfoHelloWorld,
      callback);
  }

}

