import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price
    // }
    const total = cart.reduce((a, b) => (a + b.price), 0)

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items order: {cart.length}</h5>
            <br />
            <h5>Total Price: {total}</h5>
            {/* <h5>{total}</h5> */}
        </div>
    );
};

export default Cart;