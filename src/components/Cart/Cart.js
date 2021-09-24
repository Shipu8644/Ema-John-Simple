import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let totalQuantity = 0;
    let total = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

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

            {/* <h5>{total}</h5> */}
        </div>
    );
};

export default Cart;