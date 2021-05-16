import React, { useState, useEffect } from 'react';

import Header from '../partials/Header';

// import Footer from '../partials/Footer';

import { useParams } from 'react-router-dom';

import { Store } from '../store/index';

import { useSelector, useStore } from 'react-redux';

import StarIcon from '@material-ui/icons/Star';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import OrdersContainer from '../components/OrdersContainer';

function Restaurent() {

    const url = useParams();

    const data = useSelector(state => state.restaurents);

    const cartlength = useSelector(state => state.cartlength);

    console.log(data);

    const storee = useStore();
    console.log(storee)

    const [showBtn, setShowBtn] = useState(0);



    const [finRes, changefinRes] = useState(null)

    let subscription;

    useEffect(() => {

        subscription = Store.subscribe(async () => {

            let newDat = await Store.getState();
            console.log(typeof (newDat))
            setShowBtn(newDat.cartlength);
            newDat.restaurents.forEach((val, ind) => {
                if (val.key == url.id) {
                    console.log(val)
                    changefinRes({ ...val });
                    console.log(val)
                }
            })

        })

        setShowBtn(cartlength);

        data.forEach((val, ind) => {
            if (val.key == url.id) {
                console.log(val)
                changefinRes(val);
            }
        })
        console.log('...');
        return () => {
            subscription();
        }
    }, [])




    console.log(url);



    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow pt-5 mt-4">


                <div className="w-100">
                    {finRes ? (
                        <div className="overallcontainer">

                            {/* <p>{data[0].menu[0].quantity}</p> */}
                            <div className="headercontainer">
                                <div className="mainholder p-2 d-flex justify-content-between align-items-center ">
                                    <div className="d-flex align-items-center" >

                                        <div className="imageContainerrestaurent ">
                                            <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="p-3" />
                                        </div>
                                        <div>
                                            <p className="mainName mt-1">{finRes.name}</p>
                                            <p className=""><span className="descres">{finRes.description}</span></p>
                                            <div className="ratingContainer p-1 align-items-center">
                                                <StarIcon fontSize="large" color="inherit" />
                                                <span className="ratingTextrest">{finRes.rating}</span>

                                                <span className="ratingcountres">30</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="offerDiv p-3">
                                        <span className="offerstext">Offers</span>
                                        <div className="w-100 offersBody">
                                            <div className="offeritem my-2">
                                                <LocalOfferIcon />
                                                <span className="offerdetailtext">15% Off | Use code JAIONFIRE</span>
                                            </div>

                                            <div className="offeritem my-2">
                                                <LocalOfferIcon />
                                                <span className="offerdetailtext">28% Off | Use code DEVSPREE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="restaurentbody">
                                <div className="coreContainer">
                                    <div className="leftbar">
                                        <div className="leftItemsContainer pt-4">
                                            <div className="eachItemLeft selectedListItem pr-3 pt-0">All</div>
                                            <div className="eachItemLeft pr-2">Veg</div>
                                            <div className="eachItemLeft pr-2">Non-Veg</div>
                                        </div>
                                    </div>

                                    <div className="middlebar" >
                                        <OrdersContainer key={finRes} orders={finRes} />
                                        {
                                            showBtn > 0 ? (
                                                <div className="w-100 btnMaincontainer">
                                                    <div className="buttonHolder">
                                                        <div className=" w-100 btn btn-success buttoncontinue">
                                                            Checkout ({showBtn})
                                                    </div>
                                                    </div>
                                                </div>
                                            ) : (null)
                                        }
                                    </div>

                                    <div className="rightbar">

                                    </div>

                                </div>
                            </div>
                        </div>
                    ) : (<h2 className="text-center mt-4">Loading...</h2>)}
                </div>
            </main>

            {/*  Site footer */}
            {/* <Footer /> */}

        </div>
    );
}

export default Restaurent;