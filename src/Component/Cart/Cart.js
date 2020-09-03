import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = (cart.reduce((total, course) => total + course.price, 0)).toFixed(2);


    return (
    <div>
        <h3 className="colour">ORDER SUMMARY</h3>
        <p><b>Course purchased :</b> {cart.length} </p>
        <p><b>Total Price : $</b> {total}</p>
    </div>
    );
};

export default Cart;