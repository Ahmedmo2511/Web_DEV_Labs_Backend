# Web Backend Labs (Express & MongoDB)

This repository contains two backend labs implemented using **Node.js**, **Express**, and **MongoDB**.  
The labs focus on building RESTful APIs, routing, middleware usage, and database integration using **Mongoose**.

---

## 📁 Labs Structure
web-backend-labs/
│
├── lab 8/
│ ├── routes/
│ │ └── posts.js
│ ├── app.js
│ ├── package.json
│ └── README.md
│
├── lab 9/
│ ├── models/
│ │ └── Course.js
│ ├── routes/
│ │ └── courses.js
│ ├── app.js
│ ├── package.json
│ └── README.md
│
└── README.md


Each lab is independent and can be run separately with its own configuration and dependencies.

---

## 🧪 Lab 8 – Express REST API (In-Memory Data)

### Description
This lab demonstrates how to build a RESTful API using **Express.js** without a database.  
All data is stored in memory to focus on routing, request handling, and HTTP methods.

### Features
- Express server setup
- RESTful routing
- CRUD operations using in-memory data
- JSON request and response handling
- Proper HTTP status codes

### Main Endpoints
- `GET /posts`
- `GET /posts/:id`
- `POST /posts/newpost`
- `POST /posts/:id/comments`
- `DELETE /posts/:id`

### Run Lab 8
```bash
cd lab\ 8
npm install
npm start


🧪 Lab 9 – Express + MongoDB (Mongoose)
Description

This lab extends the backend by integrating MongoDB using Mongoose.
It demonstrates full CRUD functionality with schema validation and persistent storage.

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Postman

Course Model
Course {
  title: String (required)
  description: String (required)
  instructor: String (required)
  price: Number (required)
  category: String (required)
  numberOfStudents: Number (default: 0)
}

API Endpoints

POST /courses

GET /courses

GET /courses/:id

PUT /courses/:id

DELETE /courses/:id
