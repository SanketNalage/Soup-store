# Soup Store Backend Documentation

## Overview
The Soup Store backend is built using Node.js, Express, and TypeScript. It provides a RESTful API for managing products, orders, and user authentication. The backend is designed to work seamlessly with the React frontend and utilizes MongoDB for data storage.

## Features
- User authentication with JWT
- Product management (CRUD operations)
- Order management (place and retrieve orders)
- Admin dashboard for managing orders and products

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or MongoDB Atlas)
- Docker (for containerization)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd soup-store/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` template and configure your environment variables.

### Running the Application
You can run the application in development mode using:
```
npm run dev
```

### Docker Setup
To run the backend using Docker, build the Docker image and run the container:
```
docker build -t soup-store-backend .
docker run -p 5000:5000 --env-file .env soup-store-backend
```

### API Endpoints
- **Authentication**
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Login an existing user

- **Products**
  - `GET /api/products`: Retrieve all products
  - `POST /api/products`: Add a new product (Admin only)

- **Orders**
  - `POST /api/orders`: Create a new order
  - `GET /api/orders`: Retrieve all orders (Admin only)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.