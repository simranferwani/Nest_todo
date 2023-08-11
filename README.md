# Nest_todo
Documentation

http://localhost:3000/swagger

Database 
create a db with  'nestjs_todo' name 
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your-username',
  password: 'your-password',
  database: 'nestjs_todo'

use npm run start to run the application

API Endpoints
GET /todos: Retrieve a list of all Todo items.
GET /todos/:id: Retrieve a specific Todo item by ID.
POST /todos: Create a new Todo item.
PUT /todos/:id: Update an existing Todo item.
DELETE /todos/:id: Delete a Todo item.
