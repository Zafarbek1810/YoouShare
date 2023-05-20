import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Collapses from './Collapse';
import Application from '../Partners/Application';

const Contacts = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Collapses/>
            <Application/>
            <Footer/>
        </div>
    );
};

export default Contacts;