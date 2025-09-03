# Soup Store Project

## Overview
The Soup Store project is a full-stack application designed to manage a soup product store. It includes a frontend built with React and TypeScript, and a backend powered by Node.js, Express, and TypeScript. The application allows customers to browse products, place orders, and provides an admin dashboard for managing orders and products.

## Technologies Used
- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express, TypeScript, MongoDB (Mongoose)
- **Authentication**: JWT, bcrypt
- **Hosting**: 
  - Frontend: Vercel
  - Backend: Render
  - Database: MongoDB Atlas
- **Development**: Docker for local development

## Folder Structure
```
soup-store
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── app.ts
│   │   └── server.ts
│   ├── Dockerfile
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── api
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── Dockerfile
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Features
- **User Authentication**: Users can register and log in to their accounts.
- **Product Management**: Admins can add, view, and manage products.
- **Order Management**: Customers can place orders, and admins can view and accept them.
- **Secure Communication**: All communications are secured using HTTPS and JWT tokens.

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   cd soup-store
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Create a `.env` file based on `.env.example` and configure your environment variables.
   - Install dependencies:
     ```
     npm install
     ```
   - Build and run the backend using Docker:
     ```
     docker build -t soup-store-backend .
     docker run -p 5000:5000 soup-store-backend
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Create a `.env` file based on `.env.example` and configure your environment variables.
   - Install dependencies:
     ```
     npm install
     ```
   - Build and run the frontend using Docker:
     ```
     docker build -t soup-store-frontend .
     docker run -p 3000:3000 soup-store-frontend
     ```

4. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

## License
This project is licensed under the MIT License.