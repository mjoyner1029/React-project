import React, { useState } from 'react';
import { addProduct, updateProduct } from '../../api';
import { Form, Button, Alert } from 'react-bootstrap';

const ProductForm = ({ product, onFormSubmit }) => {
    const [name, setName] = useState(product ? product.name : '');
    const [price, setPrice] = useState(product ? product.price : '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product) {
                await updateProduct(product.id, { name, price });
            } else {
                await addProduct({ name, price });
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
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">{product ? 'Update' : 'Add'}</Button>
        </Form>
    );
};

export default ProductForm;
