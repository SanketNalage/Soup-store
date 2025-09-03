import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Route to create a new order
router.post('/', authenticate, createOrder);

// Route to get all orders (admin only)
router.get('/', authenticate, getOrders);

export default router;