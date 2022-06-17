# api-server-d47

#### Phase 3 Requirements
Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard

#### Data Models
- 2 SQL data models using Sequelize, exported as Node Modules
- A Collection Class that accepts a Sequelize Model into the constructor and assigns it as `this.model`
- This class should have the following methods defined, to perform CRUD Operations
Each method should in turn call the appropriate Sequelize method for the model
`create()`
`get()` or `read()`
`update()`
`delete()`

#### Routes
- Add a Record
  - CRUD Operation: Create
  - REST Method: POST
  - Path: /food
  - Input: JSON Object in the Request Body
  - Returns: The record that was added to the database.
    - Generate an ID and attach it to the object.
    - Verify that only the fields you define get saved as a record.
- Get All Records
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /food
  - Returns: An array of objects, each object being one entry from your database.
- Get One Record
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /food/1
  - Returns: The object from the database, which has the id matching that which is in the path.
- Update A Record
  - CRUD Operation: Update
  - REST Method: PUT
  - Path: /food/1
  - Input: JSON Object in the Request Body
  - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
  - Verify that only the fields you define get saved as a record.
- Delete A Record
  - CRUD Operation: Destroy
  - REST Method: DELETE
  - Path: /food/1
  - Returns: The record from the database as it exists after you delete it (i.e. null).

#### Testing Requirments
- Be sure to specify `NODE_ENV=test` in your package.json test script.
- 404 on a bad route
- 404 on a bad method
- Create a record using POST
- Read a list of records using GET
- Read a record using GET
- Update a record using PUT
- Destroy a record using DELETE



UML:


<img width="1515" alt="Screen Shot 2022-06-16 at 9 15 29 PM" src="https://user-images.githubusercontent.com/91757275/174223691-8c1184f3-b386-4c4b-8561-7d80fc1c35f5.png">
