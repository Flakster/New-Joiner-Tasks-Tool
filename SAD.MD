# Software Architecture Document

## High level requirements

This project is intended to develop a tool that allow the administrative staff of the company to create, register and manage some of the tasks that a new joiner should work on

## User Roles and Reponsibilities

* Information processor: On charge of feeding the files with the new joiners information and storing the extracted info in the database
* Information consumer: On charge of calling the different reports using the rigth parameters

## Constraints

1. The components interaction will be performed through a messsage broker
2. At least three different programming languages will be used
3. The project must be developed within 4 weeks

## Assumptions

> The profiles are going to be uploaded individually

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

<img width="465" alt="new joiner task tool" src="https://user-images.githubusercontent.com/53324035/149567804-61fc05d7-7c26-4c06-a096-5a10b6db4130.PNG">

## Architecture Style

> The proposed architecture model for this project is microservices communicated through a message broker. Some or all of these services will run in the cloud and the information will be persisted in a database

## Solution Context Diagram

> This is a high level context diagram that shows system as a black box, its main user personas, and external integrations

****    will be added soon

## Solution Diagram

> In this section you create the solution diagram showing different components that make the system. This is a zoom-in view of the system you are building.

****    will be added soon

## Technology Stack

* Programming languages: 
  * NodeJS: For the libraries availability
  * Go: For its modularity design
  * Python: For its simplicity 
* Technologies: 
  * Git
  * Postman
  * Swagger
  * Agile
  * Unit testing
  * Linters
* API Style: 
  * REST API level 2
* Cloud: 
  * AWS

## Architecture Decisions

* Using microservices
* Run at least one service in the cloud
* Use a message broker for communication betweeen services
