# Software Architecture Document

## High level requirements

This project is intended to develop a tool that allows the administrative staff of the company to create, register and manage some of the tasks that a new joiner should work on. The primary source of information will be the files with the new joiner profile, from which the basic data will be extracted. This data will be available from the rest of components of the system to be persisted in a database. The tasks will be managed through a basic CRUD and some reports will be required


## User Roles and Reponsibilities

* Information processor: On charge of feeding the files with the new joiners information and storing the extracted info in the database
* Information consumer: On charge of calling the different reports using the rigth parameters

## Constraints

1. The components interaction will be performed through a messsage broker and API end-points
2. Different programming languages will be used
3. The project must be developed within 4 weeks
4. At least one service should run in the cloud

## Assumptions

* The profiles are going to be uploaded individually
* The profiles meet a fixed format

## Business processes

The new joiners will be incorporated to the company regularly, and their information will be loaded as soon as it is available

## Non-functional Requirements (Quality Attributes)

Linters must be used to ensure the code quality

### Back of the envelope calculations

* Profiles will be contained in files weighing up to 50 MB
* Extracted info will weights up to 10 MB
* Maximum number of profiles will be under 1000
* Number of tasks for each new joiner will be up to 10


## Functional Layer Diagram

![New Joiner Tasks application](https://user-images.githubusercontent.com/53324035/155766774-f848d3ca-af5a-4d4f-88be-52978176f2ef.png)

## Architecture Style

> The proposed architecture model for this project is microservices communicated through a message broker and API endpoints. Some or all of these services will run in the cloud and the information will be persisted in a database

## Technology Stack

* Programming languages: 
  * NodeJS: For the libraries availability
  * Go: For its concurrence management 
* Technologies: 
  * Git
  * Postman
  * Agile
  * Serverless
  * Unit testing (Jest)
  * Linters (ESlint)
* API Style: 
  * REST API level 2
* Cloud: 
  * AWS- SQS
  * AWS- Lambda Functions
  * AWS DynamoDB
  * Aws Api Getway

## Architecture Decisions

* Using microservices
* At least one service will run in the cloud
* Communication between services will be performed through a message broker and API end-points
