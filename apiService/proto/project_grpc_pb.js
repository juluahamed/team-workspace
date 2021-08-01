// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protos/project/project.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var project_pb = require('./project_pb.js');

function serialize_user_CreateProjectRequest(arg) {
  if (!(arg instanceof project_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type user.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateProjectRequest(buffer_arg) {
  return project_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListProjectRequest(arg) {
  if (!(arg instanceof project_pb.ListProjectRequest)) {
    throw new Error('Expected argument of type user.ListProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListProjectRequest(buffer_arg) {
  return project_pb.ListProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ProjectListResponse(arg) {
  if (!(arg instanceof project_pb.ProjectListResponse)) {
    throw new Error('Expected argument of type user.ProjectListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ProjectListResponse(buffer_arg) {
  return project_pb.ProjectListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ProjectResponse(arg) {
  if (!(arg instanceof project_pb.ProjectResponse)) {
    throw new Error('Expected argument of type user.ProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ProjectResponse(buffer_arg) {
  return project_pb.ProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ShareProjectRequest(arg) {
  if (!(arg instanceof project_pb.ShareProjectRequest)) {
    throw new Error('Expected argument of type user.ShareProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ShareProjectRequest(buffer_arg) {
  return project_pb.ShareProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectSvcService = exports.ProjectSvcService = {
  create: {
    path: '/user.ProjectSvc/create',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.CreateProjectRequest,
    responseType: project_pb.ProjectResponse,
    requestSerialize: serialize_user_CreateProjectRequest,
    requestDeserialize: deserialize_user_CreateProjectRequest,
    responseSerialize: serialize_user_ProjectResponse,
    responseDeserialize: deserialize_user_ProjectResponse,
  },
  share: {
    path: '/user.ProjectSvc/share',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.ShareProjectRequest,
    responseType: project_pb.ProjectResponse,
    requestSerialize: serialize_user_ShareProjectRequest,
    requestDeserialize: deserialize_user_ShareProjectRequest,
    responseSerialize: serialize_user_ProjectResponse,
    responseDeserialize: deserialize_user_ProjectResponse,
  },
  list: {
    path: '/user.ProjectSvc/list',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.ListProjectRequest,
    responseType: project_pb.ProjectListResponse,
    requestSerialize: serialize_user_ListProjectRequest,
    requestDeserialize: deserialize_user_ListProjectRequest,
    responseSerialize: serialize_user_ProjectListResponse,
    responseDeserialize: deserialize_user_ProjectListResponse,
  },
};

exports.ProjectSvcClient = grpc.makeGenericClientConstructor(ProjectSvcService);
