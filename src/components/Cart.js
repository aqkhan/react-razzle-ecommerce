import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/state';

const Cart = () => {

    const [ { cartItems } ] = useStateValue();

    return(
        <Link to="/cart"><h2>Cart { ( cartItems && cartItems.length ) || 0 }</h2></Link>
    )
}

export default Cart;