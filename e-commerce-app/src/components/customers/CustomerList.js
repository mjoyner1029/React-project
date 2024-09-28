import React, { useEffect, useState } from 'react';
import { fetchCustomers, deleteCustomer } from '../../api';
import { Button } from 'react-bootstrap';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const getCustomers = async () => {
            const result = await fetchCustomers();
            setCustomers(result.data);
        };
        getCustomers();
    }, []);

    const handleDelete = async (id) => {
        await deleteCustomer(id);
        setCustomers(customers.filter(customer => customer.id !== id));
    };

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} 
                        <Button variant="danger" onClick={() => handleDelete(customer.id)}>Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
