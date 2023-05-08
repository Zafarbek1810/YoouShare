import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner';
import YoouShare from './YoouShare';
import Tarif from './Tarif';
import PowerBank from './PowerBank';
import VideoComp from './VideoComp';
import Otziv from './Otziv';
import Map from './Map';
import Brands from './Brands';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div >
            <Header/>
            <Banner/>
            <YoouShare/>
            <Tarif/>
            <PowerBank/>
            <VideoComp/>
            <Otziv/>
            <Map/>
            <Brands/>
            <Footer/>
        </div>
    );
};

export default HomePage;