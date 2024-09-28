import React, { useState } from 'react';
import { addCustomer, updateCustomer } from '../../api';
import { Form, Button, Alert } from 'react-bootstrap';

const CustomerForm = ({ customer, onFormSubmit }) => {
    const [name, setName] = useState(customer ? customer.name : '');
    const [email, setEmail] = useState(customer ? customer.email : '');
    const [phone, setPhone] = useState(customer ? customer.phone : '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (customer) {
                await updateCustomer(customer.id, { name, email, phone });
            } else {
                await addCustomer({ name, email, phone });
            }
            onFormSubmit();
        } catch (err) {
            setError('Operation failed. Please try again.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">{customer ? 'Update' : 'Add'}</Button>
        </Form>
    );
};

export default CustomerForm;
