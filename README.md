# lambda_Authorizer_nodejs

# About the project
This project is a script from AWS Lambda and it's function is to authorize JWT tokens passed in a URL header

# Usage
This script is meant to be run in AWS lambda IDE and the following steps need to be taken to set it up properly:
- Open up CMD in the project root directory
- run ```npm install``` to install all dependencies
- compress the project folder to a zip file
- import the zipped file into AWS and authorize JWT tokens (HS256)