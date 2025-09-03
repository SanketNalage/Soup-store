import express from 'express';
import { getProducts, addProduct } from '../controllers/productController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Route to get all products
router.get('/', getProducts);

// Route to add a new product (protected route)
router.post('/', authenticate, addProduct);

export default router;