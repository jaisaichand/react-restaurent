import React from 'react';

import Header from '../partials/Header';

import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Scroll from './Scroll';
import Restaurents from '../components/Restaurents';


function Welcome() {
    const dataa = [{ name: 'jaii', unique: 'jyadfb43' }, { name: 'jaii', unique: 'jyadsdfbbfb43' }, { name: 'jaii', unique: 'jyadfsdfb43' }, { name: 'jaii', unique: 'jyaddfgfb43' }, { name: 'jaii', unique: 'jyadfbdfg43' }, { name: 'jaii', unique: 'jyaderfb43' }]
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow pt-5">

                {/*  Page sections */}
                {/* <FeaturesHome />
                <FeaturesBlocks /> */}
                <Restaurents />
                {/* <Testimonials />
                <Newsletter /> */}

            </main>

            {/*  Site footer */}
            <Footer />

        </div>
    );
}

export default Welcome;