


# Task Management App

## Overview
A comprehensive task management application that enables users to manage tasks with various fields and statuses. Users can register, log in, edit profiles, and manage tasks, categories, and tags. This application provides features like JWT-based authentication, password management, file uploads, and more.

## Features
- **User Authentication**: Registration, login, JWT-based authentication.
- **Profile Management**: Edit, update, and delete profile information.
- **Task Management**: Add, update, delete, and mark tasks as complete/incomplete.
- **Categories & Tags**: Full CRUD operations for managing categories and tags.
- **Password Management**: Forgot password and change password with Nodemailer for sending recovery emails.
- **State Management**: Redux for managing global state.
- **API Calls**: Axios for handling API requests.
- **Database**: MongoDB Atlas for database storage.

## Technologies Used
### Frontend:
- React.js
- Redux (State Management)
- Axios (API Handling)
- Cloudinary (Image Handling)

### Backend:
- Node.js
- Express.js
- MongoDB Atlas
- JWT (Authentication)
- Nodemailer (Email Handling)


## Environment Variables
Create a `.env` file in the `backend` folder and configure the following variables:
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key

```

