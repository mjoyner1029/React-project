import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../../api';
import { Button } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const result = await fetchProducts();
            setProducts(result.data);
        };
        getProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price} 
                        <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
