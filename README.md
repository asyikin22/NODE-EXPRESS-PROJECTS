# TASK MANAGER

**ERRORS-SOLUTIONS**

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

**WE HAVE THE CORE FUNCTIONALITY AND CONNECTION TO THE DB BUT HOW CAN WE IMPROVE OUR CODE?**
* Setting up custom 404 response
* Setting up asynchronous wrapper for controller
* Setting up error handler middleware

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/9b389c8e-78c8-421d-a5ce-9d20bc3a9a58)

**Refactor error**:
* Controller file: Create new error object for getTask, updateTask, deleteTask
* Error-handler file: log error into console, change argument inside the status and message
  
![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/a1ce072c-12dd-48f8-a0d3-20f21f575cae)

**Extend class Error**
* Create new folder named 'error' and a file called 'custom-error'
* Use constructor method - this is invoked when we create a new instance of a class - CustomAPIError
  1) Pass in two arguments - message and status code
  2) Call Super
  3) Pass in message value = status code
* Create a variable - createCustomError
* Import both class and variable to controller file
* Replace error object with 'return next (createCustomError(`No task with id : ${taskID}`, 404))'
* Inside error handler file - require  CustomAPIError

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/1ce09581-ec5b-4162-a3b5-60948d9dfb2d)

# STORE API

**ERRORS-SOLUTIONS**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/7a261e5a-777b-4403-a29a-08639542e188)


**DEPENDENCIES**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/703988b6-a3d8-4641-bb6c-731436d87ae1)

**Files + Folder structure + First setup**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/953fa5fc-f12d-4218-a16e-cbbf22b4e444)

**Setting up router-controller**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/4fd8bd8e-b12f-4a70-9c30-1453e8a10c35)

**getAllProductsStatic function vs getAllProducts function**
* Note that the type of JSON response will change as we progress further in the project depending on the logic of query
  
![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/2da060e1-20dd-48ba-8d6d-608a14082e3f)

**Express-async-errors**
* Link: https://www.npmjs.com/package/express-async-errors
* We use this to replace try catch method.
* Require the package on main file
* Note that at this stage, we don’t have to include 'next', we simply need to throw an error

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/91d18f81-1ac0-463d-bbed-1d3992f054e6)

**Setting up model**
* Create product file - product.json
* Create model folder - product-models.js
* Require mongoose
* Create productScheme variable for 6 properties:
  1) Name
  2) Price
  3) Featured
  4) Rating
  5) Created at
  6) Company

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/e1f7a552-875f-4dff-b198-34524e4e6627)

**Adding values inside product.json into our database**
* Create a file named 'populate.js'
* Require 'dotenv'
* connectDB function
* Require the products
* Pass on products to the database by creating new variable jsonProducts
* Connect to database using 'start' variable and try catch method to handle error and debug
* Use exit.process  to ensure that the Node.js process exits after completing its task.
* 0 means successful, 1 means there's an error

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/faabbd0b-8a02-4f54-ae47-bef46bf142d4)

**Find specific product in the database using mongoose queries**
* Link: https://mongoosejs.com/docs/queries.html
* Require file path in controller file
* Pass in object via products variable - Product.find method

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/d181ec2b-dad8-4888-af00-bc81e0de369a)

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/a2aeff02-2141-4c15-a73e-b37289f0833f)

**Query string parameter**
* A component of a URL that allows you to pass information to a web server as part of an HTTP request.
* It consists of a key-value pair appended to the end of a URL after a question mark (?), and multiple parameters are separated by ampersands (&).
* Link(keyword: search): https://hn.algolia.com/api
* Example: http://hn.algolia.com/api/v1/search?query=…
* req.query is used to filter the products based on the query parameters passed in the URL.
* We then send a JSON response containing the matching products along with the total count of products.
* When we try in the postman for example, if we look for a product that has featured value as true (?featured=true), we will get back 7 as number hits

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/9636c900-21cc-45ee-8381-d9650e9bdf8e)

**Querying for object with specific property - THE LOGIC BEHIND QUERY**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/41f07d79-9d78-41f2-9bd6-d5276bf55a76)

**Database query using regular expression - MongoDB**
* Link: https://www.mongodb.com/docs/manual/reference/operator/query/regex/#mongodb-query-op.-regex
* Definition: Provides regular expression capabilities for pattern matching strings in queries

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/5e2a209e-32c2-4831-914c-1fde5574f327)

**Regular expression - getAllProductsStatic function vs getAllProducts function**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/487340e2-17ac-48d7-87a3-79acf6e63324)

**Sorting product queries**
* Link: https://mongoosejs.com/docs/queries.html

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/b978fcfe-3fa3-470c-aed6-43222a96df73)

**Using sort.split(',').join(' ') to transform comma-separated string into space separated string**

* Why do we use this method?
  1) HTTP Query Parameters - convert string before passing it to DB query, making sorting criteria readable and easy to work with
  2) Database Queries - Some database library accepts sorting criteria as a space-separated string, it's a matter of compatibility
  3) Logging or Display

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/72c5ccd6-b50d-4af1-ad7c-ea7f8f2116b9)

**Pagination Logic:**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/e530cec2-55ee-4ad5-a3af-7a5ed731f4db)

**Numeric filters:**
* To provide option for the user to search based on the number condition.
* i.e. get a product with the price more than $100

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/b2f1405e-110f-4bc5-a786-5720a37f6569)

**Numeric filters - transform numeric filters provided in a query string into a format suitable for MongoDB queries**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/62d9434e-687f-498d-845d-5f4878938579)

**Parsing and processing numeric filters provided in a URL query string**

![image](https://github.com/asyikin22/NODE-EXPRESS-PROJECTS/assets/148519441/081bcb5f-0880-44f1-9520-bebeb40cdfdb)









