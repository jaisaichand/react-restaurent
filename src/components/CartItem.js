import React from 'react';
import Counter from './Counter';

const CartItem = (props) => {
    return (
        <div className="cartItemContainer">
            <div className="d-flex align-items-center">
                <div className="vegOutline mr-1" >
                    <div className="vegCenter" ></div>
                </div>

                <div className="cartItemName">{props.data.name}</div>
            </div>

            <div>
                <Counter data={{ quantity: props.data.quantity, wholedata: props.data, restaurent: props.restaurent }} />
            </div>

        </div>
    )
}

export default CartItem;