# New Joiners Tasks Tool

An application that allows the administrative staff from a company to upload PDF or docx files with the profile of the new employees, in order to extract basic information to be shared with some other services by usign a message broker. These services are: persistancy of extracted info in a database, tasks management and assignment, and, reports creation.

## Outline

![New Joiner Tasks application](https://user-images.githubusercontent.com/53324035/155766774-f848d3ca-af5a-4d4f-88be-52978176f2ef.png)


## Software Architecture Document

Check this document by <a href="https://github.com/Flakster/New-Joiner-Tasks-Tool/blob/development/SAD.MD" target="_blank"> clicking here </a>

## Built with

  * Node JS
  * Go Lang
  * PostgreSQL
  * Amazon Lambda functions
  * Amazon DynamoDB
  * Amazon API Gateway
  * Amazon Simple Queue Service
  
## Microservices

This project is composed of the following microservices

- New joiner profiles management (this repository)
- Profiles storage <a href="https://github.com/Flakster/New-Joiner-Persistence" target="_blank">link to the repository</a>
- Tasks management <a href="https://github.com/Flakster/tasks-management" target="_blank">link to the repository</a>
- Reports service <a href="https://github.com/Flakster/New-joiner-tasks-reports" target="_blank">link to the repository</a>


## Online API Documentation 

To see the API documentation online <a href="https://documenter.getpostman.com/view/19268372/UVkpNauv" target="_blank"> click here </a>

## Getting Started:

To get a local copy up and running follow these simple example steps:

1. Under the repository name, click the Clone or download green button.

2. Copy the URL given by clicking the clipboard button

3. Open a terminal window in your local machine and change the current directory to the one you
   want the clone directory to be made.

4. Type  git clone and then paste the URL you previously copied to the clipboard

5. Change the current directory to the newly created folder

6. More to be added soon


## Potential future features

- Front end development


## Acknowledgments:

- Alfredo de Castro

 
## Show your support
Give a ?????? if you like this project!
 
## License
This project is [MIT](https://github.com/Flakster/New-Joiner-Tasks-Tool/blob/main/LICENSE) Licensed

## Author
???? Carlos Santamar??a

* Twitter: [@Flakster ](https://twitter.com/Flakster )
* Github: [@Flakster](https://github.com/Flakster)
