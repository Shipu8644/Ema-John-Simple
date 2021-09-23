import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price

    // }
    const total = cart.reduce((a, b) => (a + b.price), 0)
    const shipping = total > 0 ? 15 : 0;
    const tax = total * (20 / 100);
    const grandTotal = shipping + total + tax;

    return (
        <div>
            <h3 className='cart-middle'>Order Summary</h3>
            <h5 className='cart-middle'>Items order: {cart.length}</h5>
            <br />
            <h5>Total Price: ${total.toFixed(2)}</h5>
            <h5>Tax: ${tax.toFixed(2)}</h5>
            <h5>shipping: ${shipping.toFixed(2)}</h5>
            <h5>grandTotal: ${grandTotal.toFixed(2)}</h5>

            {/* <h5>{total}</h5> */}
        </div>
    );
};

export default Cart;