// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protos/project/entity.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var entity_pb = require('./entity_pb.js');

function serialize_entity_CreateEntityRequest(arg) {
  if (!(arg instanceof entity_pb.CreateEntityRequest)) {
    throw new Error('Expected argument of type entity.CreateEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_CreateEntityRequest(buffer_arg) {
  return entity_pb.CreateEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_entity_DeleteEntityRequest(arg) {
  if (!(arg instanceof entity_pb.DeleteEntityRequest)) {
    throw new Error('Expected argument of type entity.DeleteEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_DeleteEntityRequest(buffer_arg) {
  return entity_pb.DeleteEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_entity_EntityListResponse(arg) {
  if (!(arg instanceof entity_pb.EntityListResponse)) {
    throw new Error('Expected argument of type entity.EntityListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_EntityListResponse(buffer_arg) {
  return entity_pb.EntityListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_entity_EntityResponse(arg) {
  if (!(arg instanceof entity_pb.EntityResponse)) {
    throw new Error('Expected argument of type entity.EntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_EntityResponse(buffer_arg) {
  return entity_pb.EntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_entity_FetchEntityRequest(arg) {
  if (!(arg instanceof entity_pb.FetchEntityRequest)) {
    throw new Error('Expected argument of type entity.FetchEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_FetchEntityRequest(buffer_arg) {
  return entity_pb.FetchEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_entity_ListEntityRequest(arg) {
  if (!(arg instanceof entity_pb.ListEntityRequest)) {
    throw new Error('Expected argument of type entity.ListEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_ListEntityRequest(buffer_arg) {
  return entity_pb.ListEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_entity_MoveEntityRequest(arg) {
  if (!(arg instanceof entity_pb.MoveEntityRequest)) {
    throw new Error('Expected argument of type entity.MoveEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_entity_MoveEntityRequest(buffer_arg) {
  return entity_pb.MoveEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EntitySvcService = exports.EntitySvcService = {
  create: {
    path: '/entity.EntitySvc/create',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.CreateEntityRequest,
    responseType: entity_pb.EntityResponse,
    requestSerialize: serialize_entity_CreateEntityRequest,
    requestDeserialize: deserialize_entity_CreateEntityRequest,
    responseSerialize: serialize_entity_EntityResponse,
    responseDeserialize: deserialize_entity_EntityResponse,
  },
  get: {
    path: '/entity.EntitySvc/get',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.FetchEntityRequest,
    responseType: entity_pb.EntityResponse,
    requestSerialize: serialize_entity_FetchEntityRequest,
    requestDeserialize: deserialize_entity_FetchEntityRequest,
    responseSerialize: serialize_entity_EntityResponse,
    responseDeserialize: deserialize_entity_EntityResponse,
  },
  list: {
    path: '/entity.EntitySvc/list',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.ListEntityRequest,
    responseType: entity_pb.EntityListResponse,
    requestSerialize: serialize_entity_ListEntityRequest,
    requestDeserialize: deserialize_entity_ListEntityRequest,
    responseSerialize: serialize_entity_EntityListResponse,
    responseDeserialize: deserialize_entity_EntityListResponse,
  },
  move: {
    path: '/entity.EntitySvc/move',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.MoveEntityRequest,
    responseType: entity_pb.EntityResponse,
    requestSerialize: serialize_entity_MoveEntityRequest,
    requestDeserialize: deserialize_entity_MoveEntityRequest,
    responseSerialize: serialize_entity_EntityResponse,
    responseDeserialize: deserialize_entity_EntityResponse,
  },
  delete: {
    path: '/entity.EntitySvc/delete',
    requestStream: false,
    responseStream: false,
    requestType: entity_pb.DeleteEntityRequest,
    responseType: entity_pb.EntityResponse,
    requestSerialize: serialize_entity_DeleteEntityRequest,
    requestDeserialize: deserialize_entity_DeleteEntityRequest,
    responseSerialize: serialize_entity_EntityResponse,
    responseDeserialize: deserialize_entity_EntityResponse,
  },
};

exports.EntitySvcClient = grpc.makeGenericClientConstructor(EntitySvcService);
