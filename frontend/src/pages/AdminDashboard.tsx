import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Product } from '../models/Product';
import { Order } from '../models/Order';

const AdminDashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchProducts();
        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>Order ID: {order._id}, Status: {order.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;