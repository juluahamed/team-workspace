// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protos/user/user.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserLoginRequest(arg) {
  if (!(arg instanceof user_pb.UserLoginRequest)) {
    throw new Error('Expected argument of type user.UserLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserLoginRequest(buffer_arg) {
  return user_pb.UserLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserRegisterRequest(arg) {
  if (!(arg instanceof user_pb.UserRegisterRequest)) {
    throw new Error('Expected argument of type user.UserRegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserRegisterRequest(buffer_arg) {
  return user_pb.UserRegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserVerifyRequest(arg) {
  if (!(arg instanceof user_pb.UserVerifyRequest)) {
    throw new Error('Expected argument of type user.UserVerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserVerifyRequest(buffer_arg) {
  return user_pb.UserVerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserVerifyResponse(arg) {
  if (!(arg instanceof user_pb.UserVerifyResponse)) {
    throw new Error('Expected argument of type user.UserVerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserVerifyResponse(buffer_arg) {
  return user_pb.UserVerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserSvcService = exports.UserSvcService = {
  register: {
    path: '/user.UserSvc/register',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRegisterRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_UserRegisterRequest,
    requestDeserialize: deserialize_user_UserRegisterRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  login: {
    path: '/user.UserSvc/login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserLoginRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_UserLoginRequest,
    requestDeserialize: deserialize_user_UserLoginRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  verify: {
    path: '/user.UserSvc/verify',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserVerifyRequest,
    responseType: user_pb.UserVerifyResponse,
    requestSerialize: serialize_user_UserVerifyRequest,
    requestDeserialize: deserialize_user_UserVerifyRequest,
    responseSerialize: serialize_user_UserVerifyResponse,
    responseDeserialize: deserialize_user_UserVerifyResponse,
  },
  getUser: {
    path: '/user.UserSvc/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.UserVerifyResponse,
    requestSerialize: serialize_user_GetUserRequest,
    requestDeserialize: deserialize_user_GetUserRequest,
    responseSerialize: serialize_user_UserVerifyResponse,
    responseDeserialize: deserialize_user_UserVerifyResponse,
  },
};

exports.UserSvcClient = grpc.makeGenericClientConstructor(UserSvcService);
