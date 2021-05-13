import React, { useState, useEffect } from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Restaurent() {

    const url = useParams();

    const data = useSelector(state => state.restaurents)

    console.log(data);

    const [finRes, changefinRes] = useState(null)

    useEffect(() => {

        data.forEach((val, ind) => {
            if (val.key == url.id) {
                console.log(val)
                changefinRes(val);
            }
        })
        console.log('...')
    }, [])


    console.log(url);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow pt-5">


                <div className="w-100">
                    {finRes ? (
                        <div className="overallcontainer">
                            <div className="headercontainer">
                                <div className="mainholder">
                                    <div className="imageContainerrestaurent ">
                                        <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="p-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (<h2 className="text-center mt-4">Loading...</h2>)}
                </div>
            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default Restaurent;