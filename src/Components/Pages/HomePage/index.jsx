import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner';
import YoouShare from './YoouShare';
import Tarif from './Tarif';
import PowerBank from './PowerBank';
import VideoComp from './VideoComp';
import Otziv from './Otziv';
import Brands from './Brands';
import QrCodeSvg from '../../../../src/Components/Common/Svgs/QrCodeSvg';
import Footer from '../Footer/Footer';
import HomeWrapper from './home.style';
import Maps from './Maps';

const HomePage = () => {
    return (
        <HomeWrapper >
            <Header/>
            <Banner/>
            <YoouShare/>
            <Tarif/>
            <PowerBank/>
            <VideoComp/>
            <Otziv/>
            <Maps/>
            <Brands/>
            <Footer/>
            <div className="qr">
             <QrCodeSvg/>
            </div>
        </HomeWrapper>
    );
};

export default HomePage;