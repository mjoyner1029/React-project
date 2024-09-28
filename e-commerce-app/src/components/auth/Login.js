import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add login logic here
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    );
};

export default Login;
