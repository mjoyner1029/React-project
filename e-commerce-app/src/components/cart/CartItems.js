import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div>
            <h3>{item.productName} - ${item.price}</h3>
            {/* Additional item details */}
        </div>
    );
};

export default CartItem;
