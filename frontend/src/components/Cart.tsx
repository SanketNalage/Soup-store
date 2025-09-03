import React from 'react';

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<any[]>([]);

    const handleRemoveItem = (itemId: string) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const handleCheckout = () => {
        // Logic for handling checkout
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <span>{item.name} - ${item.price}</span>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleCheckout} disabled={cartItems.length === 0}>
                Checkout
            </button>
        </div>
    );
};

export default Cart;