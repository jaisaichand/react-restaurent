import React from 'react';
import OrderItem from './OrderItem';

const OrdersContainer = (props) => {
    console.log(props);

    return (
        <div className="">
            {props.orders.map((val, ind) => {
                return <OrderItem value={val} key={ind} />
            })}
        </div>
    )
}

export default OrdersContainer;