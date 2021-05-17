import React from 'react';

import Header from '../partials/Header';

function Cart() {

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow pt-5">
                <div className="cartPage">
                    <div className="sectionsContainer d-flex">
                        <div className="firstContainer">
                            <div className="ordersContainer w-100" >

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