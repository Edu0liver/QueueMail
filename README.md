# QueueMail

An API that queues emails using Bull and Nodemailer

## To run the application:

```
1. npm install
```
```
2. npm run start
```

## POST /user/create

#### Info required to the route: ```name, email```

Single route, responsible for creating the user.


## How does it play:

When the user uses the route and sends his information, the application will make checks to ensure that there is no duplicate data in the database, then he will register the user by sending him an email.This email will be placed in a queue to be processed in the background and not require, for example, much from the server that hosts the application.
