import React from 'react';
import OrderItem from './OrderItem';

const OrdersContainer = (props) => {
    console.log(props);

    return (
        <div className="">
            {props.orders.menu.map((val, ind) => {
                return <OrderItem data={val} restaurent={props.orders} key={props.orders.key + ind} />
            })}
        </div>
    )
}

export default OrdersContainer;