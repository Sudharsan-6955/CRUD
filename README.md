#  User CRUD API

A simple Node.js + Express + MongoDB CRUD application to manage users. Built with RESTful APIs and tested via Postman.

---

## 🚀 Features

- ➕ Add new user
- 📃 View all users
- 🔍 Get a user by ID
- ✏️ Update user details
- ❌ Delete user

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Testing Tool**: Postman
- **Environment**: dotenv

---

## 📁 Project Structure

CRUD/
├── controllers/                                                                                                                                                              
│ └── controlling.js # All CRUD logic
├── dB/
│ └── db.js # MongoDB connection
├── models/
│ └── user.model.js # Mongoose schema
├── Routes/
│ └── routing.js # Express routes
├── .env # Your secret configs (should be gitignored)
├── .gitignore
├── package.json
└── server.js # Entry point

# Run this cmd 
CRUD >node server.js
# Check postman also #your atlas also

