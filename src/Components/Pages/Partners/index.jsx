import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Invest from './Invest';
import Invite from './Invite';
import Information from './Information';
import Brands from '../HomePage/Brands';
import Application from './Application';
// import MyForm from './MyForm';

const Partners = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Invest/>
            <Invite/>
            <Information/>
            <Brands/>
            {/* <MyForm/> */}
            <Application/>
            <Footer/>
        </div>
    );
};

export default Partners;