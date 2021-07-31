# team-workspace
Simple Team workspace using gRPC


## Steps
- [ ] Understand gRPC and implementation in Node - Day 1
- [ ] Prototype simple gRPC client and server - Day 1
- [ ] High Level system architecture - Day 1
- [ ] Database Design - Day 1
- [ ] Low level Design - Day 1
- [ ] Implement Backend - Day 2
- [ ] Deployment scripts - Day 2
- [ ] E2E Test Day 2


## Implementation Details

There will be 4 services
- userService: reponsible for all operations associated with user
- projectService: reponsible for all operations associated with project 
- entityService: reponsible for all operations associated with  files and folders
- apiGatewayService: routing api calls to all the services and a proxy server to handle HTTP 1.0 requests from frontend

<img src="GatewayService.png">

Database design:
As per requirement each project's data should reside in separate dbs
There will teamDatabase which will contain following collections
    - user
    - project

And Each project will have its on db named after its Id and will host following collection
    - entity : details of files, folders and its properties


<img src="db.png">

Handling Database Reads/write to unique instances:
As per requirements, 
    a. Find operations to the Users collection should be performed on replica 1
    b. Find operations to the Projects collection should be performed on a
    replica 2
    c. Find operations to the Files/Folders collection should be performed on
    the primary node

This will be handled by maintaining a DB connection pool within the service and the this connection will used to access data from DB
eg: 
userService will have two connection opened
Conn1: will issue connection as replicaSet=rs0 and connect to primary. this connection will be used for all writes to user sollection
Conn2: will issue connection using the instance endpoint of replica1 server. this will be used for all read operations

<img src="ConnectionPool.png">