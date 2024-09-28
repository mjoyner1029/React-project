import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/order-history">Order History</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
