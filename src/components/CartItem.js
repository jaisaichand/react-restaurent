import React from 'react';

const CartItem = (props) => {
    return (
        <div className="cartItemContainer">
            <div>
                <div className="vegOutline" >
                    <div className="vegCenter" ></div>
                </div>

                <div className="cartItemName"></div>
            </div>
        </div>
    )
}

export default CartItem;