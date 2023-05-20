import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Second from './Second';
import Otziv from '../HomePage/Otziv';
import Application from '../Partners/Application';

const WhoWeAre = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Second/>
            <Otziv/>
            <Application/>
            <Footer/>
        </div>
    );
};

export default WhoWeAre;