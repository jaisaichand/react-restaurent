

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../store/index';

const CartContainer = (props) => {

    let subscription;
    let cartitems = [];

    const [cartarray, setCartarray] = useState([]);

    useSelector((state) => {
        console.log(state);
        cartitems = state.cartitems;
    })
    useEffect(() => {
        subscription = Store.subscribe((change) => {
            console.log(change)
        })


        return () => { subscription() }
    }, [])

    return (
        <div>
            cart container
        </div>
    )
}

export default CartContainer;