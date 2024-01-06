## Section 21: RandomIdeas App - Backend REST API

### Topics Covered
- Setting up a basic Express server
- Starter app routes
- Putting the routes for ideas in a separate file and folder
- Middleware for the app to use exported routes
- GET routes for ideas
  - for all ideas
  - for a single idea
- POST route for a new idea
- PUT route for updating an existing idea
- DELETE route for removing a single idea
- MongoDB and using Mongoose package
- Refactoring code to using an Idea model for the database model object for the app's Ideas
- Refactor routes to connect to MongoDB for all actions

### MongoDB
- What is a database?
  - Organized collection of data
  - A database management system (DBMS) is the computerized system that manages your databases
  - Database systems can run on a file system or across multiple nodes or clusters
  - There are different types of databases (relational, NoSQL, etc)
- What is MongoBD?
  - A NoSQL/Document database
  - Typically faster and more scalable than traditional databases
  - Very popular in the JavaScript world (MERN, MEAN, MEVN)
- Tools we will use
  - MongoDB Atlas: cloud implementation of MongoDB
  - MongoDB Compass: Desktop tool to manage your databases
  - Mongoose: Node.js package for working with MongoDB