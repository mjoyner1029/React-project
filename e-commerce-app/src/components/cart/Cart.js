import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { fetchCartItems } from '../api';

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            const result = await fetchCartItems();
            setItems(result.data);
        };
        getCartItems();
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map(item => <CartItem key={item.id} item={item} />)
            )}
        </div>
    );
};

export default Cart;
