import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const result = await fetchOrders();
            setOrders(result.data);
        };
        getOrders();
    }, []);

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order ID: {order.id}, Date: {order.date}
                        {/* Add more order details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
