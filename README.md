API Endpoints
GET /todos: Retrieve a list of all Todo items.
GET /todos/:id: Retrieve a specific Todo item by ID.
POST /todos: Create a new Todo item.
PUT /todos/:id: Update an existing Todo item.
DELETE /todos/:id: Delete a Todo item.

Documentation
API documentation is available using Swagger. Run the server and navigate to http://localhost:3000/swagger to access the API documentation.

Db Creds 
host: 'localhost',
port: 5432,
username: 'your-username',
password: 'your-password',
database: 'nestjs_todo'

Perform 
npm install 

To Start 
npm run start
