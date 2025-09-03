import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Product List</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                    <Link to="/admin">Admin Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;