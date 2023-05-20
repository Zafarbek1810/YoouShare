import React from 'react';
import BannerWrapper from './Banner.style';
import Container from '../../../Common/Container';
import QrCodeSvg from '../../../Common/Svgs/QrCodeSvg';
import BannerIcon from '../../../Common/Svgs/BannerIcon';
import BannerIcon2 from '../../../Common/Svgs/BannerIcon2';
import BannerIcon3 from '../../../Common/Svgs/BannerIcon3';
import BannerIcon4 from '../../../Common/Svgs/BannerIcon4';
import BannerIcon5 from '../../../Common/Svgs/BannerIcon5';
const Banner = () => {
    return (
        <BannerWrapper>
            <Container>
            <div className="wrap">
                <div className="left" >
                    <h3 className="title" data-aos={"fade-right"}>Почасовая аренда <br /> <span>Power Bank</span></h3>
                    <p className="subtitle" data-aos={"fade-right"}>Как это работает</p>
                    <ul data-aos={"fade-right"}>
                        <li><BannerIcon/> Установите приложение</li>
                        <li><BannerIcon2/> Найдите станцию</li>
                        <li><BannerIcon3/> Отсканируйте QR-код для начала аренды</li>
                        <li><BannerIcon4/> Заберите повербанк с собой</li>
                        <li><BannerIcon5/> Верните в любую станцию</li>
                    </ul>
                </div>
                <div className="right" >
                    <img data-aos={"fade-left"} src="/images/banner-right.png" alt="" />
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