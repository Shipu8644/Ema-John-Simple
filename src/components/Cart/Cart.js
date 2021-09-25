import React from 'react';
import Category from '../Category/Category';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    let value = '';

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        // console.log(product.quantity);
        totalQuantity = totalQuantity + product.quantity;
        value = value + product.category + ", ";
        console.log(product.category);
    }
    console.log(typeof value);

    console.log(totalQuantity);
    // const total = cart.reduce((a, b) => (a + b.price * b.quantity), 0);
    // const totalQuantity = cart.reduce((a, b) => (a + b.quantity), 0);
    // console.log(totalQuantity);
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = shipping + total + tax;

    return (
        <div>
            <h3 className='cart-middle'>Order Summary</h3>
            <h5 className='cart-middle'>Items order: {totalQuantity}</h5>
            <br />
            <h5>Total Price: ${total.toFixed(2)}</h5>
            <h5>shipping: ${shipping.toFixed(2)}</h5>
            <h5>Tax: ${tax.toFixed(2)}</h5>

            <h5>grandTotal: ${grandTotal.toFixed(2)}</h5>
            <h5  >Category: <span style={{ marginLeft: '10px', color: 'blue' }}>{value}</span> </h5>
            <h5>Category:</h5>
            {
                cart.map(cat => <Category cat={cat}></Category>)
            }

        </div>
    );
};

export default Cart;