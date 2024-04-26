# TASK MANAGER

**PROBLEMS-SOLUTIONS**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/c965c3ce-46c6-4908-89cd-8a38eec940e9)


**CHECK TO SEE IF EXPRESS IS WORKING ON MAIN FILE**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/702297fe-e449-4fb2-9ea6-3879aec22a11)

**CHECK TO SEE IF ROUTE IS WORKING ON BROWSER**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/f2f58f06-0346-4bcd-9e80-997149dba3a1)

**Create a controller file to maintain separation of concerns and facilitate modular, maintainable code.**:

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/3c4a7715-c403-47f7-917c-f28315c16b6e)

**Define routes for performing CRUD (Create, Read, Update, Delete) operations on tasks**:
* Note that as we progress, we will need to wrap these codes inside try and catch blocks as Mongoose queries are not promises.
* Source: https://mongoosejs.com/docs/queries.html#queries-are-not-promises
* The purpose we write this code initially is to make sure the route and controller functions work in node
  
![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/5f8978e5-2fd6-4147-a489-3ebe6b3ce0ed)

**Test the POST function on POSTMAN**
* Perform a post request
* Write testing in the body (raw)
* You must see the word 'create task' or whatever the client sends (req body)

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/3d040f8a-ce9f-4cec-8acd-abfdddb4db3c)

**Test the function with params (/:id) to make sure we can access all our routes correctly (USING POSTMAN)**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/3f331678-d5ea-4fb2-a2ca-3e261a88f295)

**SETUP CONNECTION DB + MONGODB USING MONGOOSE - TEST THE CONNECTION BETWEEN FILES**
* Create a connect.js file inside 'db' folder
* Import the module into main file (app.js)
* Test if the connection is up and running on the console

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/7da95cc2-8595-4968-a771-6a61ee8adb50)

**Test if the connection string works and store it in .env**
* Create an .env file, store MONGO_URI inside it
* Place it in .gitignore so it won't be pushed to remote github
* Get rid of connection string variable, initiate a connection to a MongoDB database using the Mongoose method
* Import .env file into main file using 'require'
* Establish database connection using asynchronous function named 'start'
  1) After the database connection is established successfully (or an error occurs) the function starts the Express.js server by calling app.listen(port, ...)
  2) 'process.env' object is used to access MONGO_URI inside the environment variable (.env file)

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/af9dfa58-8757-45d0-895c-0a0cd36b0f2d)

**Set up structure for documents & assign them to collection - Schema & Model**
* Schema link: https://mongoosejs.com/docs/schematypes.html
* Create a model folder and a file named 'tasks-models.js'
* Import mongoose into it
* Schema design: 1) Task, 2) Completion status
  
![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/5e2ef330-2c59-4d9d-9d94-1dd15ba9b2ae)

**Post some simplified data to Database (name and completion status):**
* Alter the function for createTask into async await operation
* It handles the creation of a new task based on the data provided in the request body (Task.create)
* And sends an appropriate response back to the client (res.status)
* Note that properties other than 'task' and 'completion status' will be ignored in the database when we include them in the request body

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/c346d1dd-f429-4d96-a1b4-f8040705a54a)

**Add validation to schema**
* It's a function that allows you to enforce data validation rules on your schema fields.
* They are used to ensure that the data stored in your MongoDB documents meets certain criteria before it is saved to the database.
* In this example, we going to
  1) Set default completion status to false
  2) Trim extra space in the object 'name' (notice the white space around 'Asyikin')
  3) Limit character allowed to put in object

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/27860758-94b7-48dd-8623-cf9160271f3d)

**Handling error in validation**
* Wrap the codes inside createTask variable inside try and catch blocks
* Example below shows what will happen if we leave the name object empty

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/6cfa4eb1-316c-43c6-9c93-591762a721b3)

**Find specific object with specific id:**
* Link: https://mongoosejs.com/docs/api/model.html#Model.findOne()
* Wrap codes inside getTask in try and catch block
* Handle error with if statement in case the id we're looking for doesn’t exist.

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/57267c2a-39ff-4ad8-b53a-314b8f1f0b98)

**Delete task**
* Wrap codes inside getTask in try and catch block as Mongoose queries are not promises.
* Handle error with if statement in case the id we're looking for doesn’t exist.
  
![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/6053a04c-13ff-4f99-a5e6-a0823f0486fa)

**Update task**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/6ff39af0-83a4-4ad4-a82a-dc4a4dd6b9cf)

**SET UP STATIC FILE:**
* Use app.use middleware
* Static file is located inside public folder

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/2500f1da-47e4-4c93-a623-bf9446d7ae55)

**WE HAVE THE CORE FUNCTIONALITY AND CONNECTION TO THE DATABASE. BUT HOW CAN WE IMPROVE OUR CODE?**

