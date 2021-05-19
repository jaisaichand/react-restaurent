import React from 'react';

import Header from '../partials/Header';
import CartContainer from '../components/CartContainer';

function Cart() {

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow pt-5">
                <hr />
                <h2 className="text-center" style={{ color: "#000000b0" }} >YOUR CART</h2>
                <div className="cartPage">
                    <div className="sectionsContainer d-flex">
                        <div className="firstContainer">
                            <div className="ordersContainer w-100" >
                                <CartContainer />
                            </div>
                        </div>
                        <div className="secondContainer">

                        </div>
                    </div>
                </div>
            </main>



        </div>
    );
}

export default Cart;