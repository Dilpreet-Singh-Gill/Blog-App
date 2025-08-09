# Blog-App

A full-stack blogging application with user authentication, post creation, and image uploads to Cloudinary.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This **Blog-App** allows authenticated users to create, update, delete, and view blog posts.  
Posts can have images uploaded which are stored on **Cloudinary**.  
The app is built with a **React frontend** and a **Node.js/Express backend** using **MongoDB** for data persistence.

---

## Features

- User registration and login (authentication & authorization)
- Create, read, update, and delete (CRUD) posts
- Upload and store post images in Cloudinary
- Display posts with images
- Protected routes for authenticated users
- Responsive UI components

---

## Tech Stack

**Frontend:** React, Axios, React Router, React Icons  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Image Upload:** Cloudinary  
**Authentication:** JWT (JSON Web Tokens)  
**File Upload:** Multer (memory storage)

---

## Folder Structure

Blog-App/
│
├── backend/
│ ├── config/
│ │ ├── cloudinary.js # Cloudinary setup and upload utility
│ │ └── multer.js # Multer config for memory storage
│ ├── controllers/
│ │ ├── authController.js # User authentication logic
│ │ └── postController.js # Post CRUD and image upload logic
│ ├── middleware/
│ │ ├── auth.js # Auth middleware for protected routes
│ │ └── uploadMemory.js # Multer middleware for memory file upload
│ ├── models/
│ │ ├── Post.js # Mongoose schema for blog posts
│ │ └── User.js # Mongoose schema for users
│ ├── routes/
│ │ ├── authRoutes.js # Routes for authentication
│ │ └── postRoutes.js # Routes for post operations
│ ├── .env # Environment variables (not committed)
│ ├── package.json
│ └── server.js # Backend server entry point
│
├── frontend/
│ ├── public/ # Static files like index.html
│ ├── src/
│ │ ├── api/
│ │ │ ├── axios.js # Axios instance setup
│ │ │ └── posts.js # API calls related to posts
│ │ ├── assets/ # Images, icons, and other assets
│ │ ├── components/
│ │ │ ├── Footer/ # Footer component files
│ │ │ ├── Header/ # Header component files
│ │ │ ├── AboutSection.jsx
│ │ │ ├── AuthForm.jsx
│ │ │ ├── BlogCard.jsx
│ │ │ ├── BlogGrid.jsx
│ │ │ ├── ContactCTA.jsx
│ │ │ ├── ContactForm.jsx
│ │ │ ├── HeroSection.jsx
│ │ │ ├── MyPostCard.jsx
│ │ │ ├── PostDetail.jsx
│ │ │ ├── PostForm.jsx
│ │ │ ├── TeamSection.jsx
│ │ │ └── TestimonialsSection.jsx
│ │ ├── pages/
│ │ │ ├── About.jsx
│ │ │ ├── Blogs.jsx
│ │ │ └── Contact.jsx
│ │ ├── index.js # React entry point
│ │ └── App.js # Main app component with routes
│ ├── package.json
│
└── README.md


---

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB (local or cloud)
- Cloudinary account

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
2. Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
3. Create a .env file in the backend folder:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
4. Start the backend server:

bash
Copy
Edit
npm run dev
5. Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
6. Start the frontend app:

bash
Copy
Edit
npm start
7. Open your browser:
Visit http://localhost:3000

Environment Variables
Variable	Description
PORT	Backend server port (default 5000)
MONGO_URI	MongoDB connection URI
JWT_SECRET	Secret key for JWT authentication
CLOUDINARY_NAME	Cloudinary cloud name
CLOUDINARY_API_KEY	Cloudinary API key
CLOUDINARY_API_SECRET	Cloudinary API secret

Available Scripts
Backend:

bash
Copy
Edit
npm run dev   # Starts server with nodemon
npm start     # Starts server normally
Frontend:

bash
Copy
Edit
npm start     # Starts the React app
npm run build # Builds for production

Contributing
Feel free to fork the repository and submit pull requests.
Please ensure your code follows the existing style and includes tests where applicable.
