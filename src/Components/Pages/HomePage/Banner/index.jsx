import React from 'react';
import BannerWrapper from './Banner.style';
import Container from '../../../Common/Container';
import QrCodeSvg from '../../../Common/Svgs/QrCodeSvg';

const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
            <div className="wrap">
                <div className="left">
                    <h3 className="title">Почасовая аренда <br /> <span>Power Bank</span></h3>
                    <p className="subtitle">Как это работает</p>
                    <ul>
                        <li><img src="/images/frame1.png" alt="" /> Установите приложение</li>
                        <li><img src="/images/frame2.png" alt="" /> Найдите станцию</li>
                        <li><img src="/images/frame3.png" alt="" /> Отсканируйте QR-код для начала аренды</li>
                        <li><img src="/images/frame4.png" alt="" /> Заберите повербанк с собой</li>
                        <li><img src="/images/frame5.png" alt="" /> Верните в любую станцию</li>
                    </ul>
                </div>
                <div className="right">
                    <img src="/images/banner-right.png" alt="" />
                </div>
            </div>
            </Container>
            <div className="qr">
            <QrCodeSvg/>
            </div>
        </BannerWrapper>
    );
};

export default Banner;