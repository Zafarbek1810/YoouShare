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
import QrCodeSvg from '../../../../src/Components/Common/Svgs/QrCodeSvg';
import Footer from '../Footer/Footer';
<<<<<<< HEAD
import HomeWrapper from './home.style';
=======
import Maps from './Maps';
>>>>>>> 0b91ced2f3757fa0ca969523fc0253fbbb35f3ce

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
            <Map/>
            {/* <Maps/> */}
            <Brands/>
            <Footer/>
            <div className="qr">
             <QrCodeSvg/>
            </div>
        </HomeWrapper>
    );
};

export default HomePage;