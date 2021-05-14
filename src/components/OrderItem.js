import React from 'react';

const OrderItem = (props) => {
    return (
        <div className="orderitemcontainer p-1 mb-2">
            <div className="d-flex align-items-center">
                <div>
                    <p className="orderitemname m-0">Nizami Chicken Biryani </p>
                    <div className="d-flex align-items-center ">
                        <div className="vegOrNonVeg">
                            <div className="vegOutline">
                                <div className="vegCenter"></div>
                            </div>
                        </div>

                        <div className="mx-2">₹365</div>

                        <div className="discountLabelDiv">
                            <span className="crimsontext"><small style={{ fontSize: '12px' }}><b>60% OFF</b></small></span>
                            <span className="crimsontext"><small style={{ fontSize: '11px' }}> | USE DEAL60</small></span>

                        </div>


                    </div>
                    <div className="descriptionText">
                        Freshly Cooked Kachhi Dum Biryani. pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron and aromatic Ghee. Served with Mirchi Ka Salan and Raita.
                </div>
                </div>

                <div className="imagebtnContainer">
                    <div className="imageContainerRelative">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q6q5klzvkmv8cmuuvkp1" alt="" />
                        <div className="addBtnContainer">Add <span className="pluss">+</span> </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderItem;