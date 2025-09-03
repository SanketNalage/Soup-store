# Soup Store Frontend

This is the frontend part of the Soup Store project, built using React and TypeScript. The application allows users to browse products, manage their cart, and place orders. Admin users can manage products and view orders.

## Project Structure

- **src/**: Contains all the source code for the frontend application.
  - **components/**: Reusable components used throughout the application.
    - `Cart.tsx`: Displays the items in the user's cart.
    - `Navbar.tsx`: Provides navigation links for the application.
    - `OrderForm.tsx`: Allows users to place orders.
    - `ProductCard.tsx`: Displays individual product details.
  - **pages/**: Contains the main pages of the application.
    - `AdminDashboard.tsx`: Admin page for managing orders and products.
    - `Checkout.tsx`: Page for reviewing the cart and placing orders.
    - `Home.tsx`: Landing page of the application.
    - `ProductList.tsx`: Displays a list of available products.
  - **api/**: Contains API configuration and Axios instance.
    - `axios.ts`: Configures Axios for making API calls to the backend.
  - `App.tsx`: Main application component that sets up routing.
  - `index.tsx`: Entry point for the React application.

## Getting Started

To get started with the frontend application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd soup-store/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables.

4. Start the development server:
   ```
   npm start
   ```

## Deployment

The frontend application is hosted on Vercel. Ensure that the environment variables are set correctly in the Vercel dashboard for a successful deployment.

## API Integration

The frontend communicates with the backend API using Axios. Ensure that the backend is running and accessible for the frontend to function correctly.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.