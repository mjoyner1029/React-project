import React, { useEffect, useState } from 'react';
import { fetchCustomers, deleteCustomer } from '../api';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CustomerDetail = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const getCustomer = async () => {
            const result = await fetchCustomers();
            const foundCustomer = result.data.find(c => c.id === Number(id));
            setCustomer(foundCustomer);
        };
        getCustomer();
    }, [id]);

    const handleDelete = async () => {
        await deleteCustomer(id);
        // Optionally redirect or show a message
    };

    if (!customer) return <div>Loading...</div>;

    return (
        <div>
            <h2>Customer Detail</h2>
            <p>Name: {customer.name}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <Button variant="danger" onClick={handleDelete}>Delete Customer</Button>
        </div>
    );
};

export default CustomerDetail;
