import React from 'react';
import BannerWrapper from './Banner.style';
import { useTranslation } from "react-i18next";
import Container from '../../../Common/Container';
import BannerIcon from '../../../Common/Svgs/BannerIcon';
import BannerIcon2 from '../../../Common/Svgs/BannerIcon2';
import BannerIcon3 from '../../../Common/Svgs/BannerIcon3';
import BannerIcon4 from '../../../Common/Svgs/BannerIcon4';
import LocationSvgBanner from '../../../Common/Svgs/LocationSvgBanner';
const Banner = () => {
  const { t } = useTranslation();

    return (
        <BannerWrapper>
            <Container>
            <div className="wrap">
                <div className="left" >
                    <h3 className="title" data-aos={"fade-right"}>{t("banner.title")} <br /> <span>{t("banner.title-span")}</span></h3>
                    <p className="subtitle" data-aos={"fade-right"}>{t("banner.how-to-work")}</p>
                    <ul data-aos={"fade-right"}>
                        <li><BannerIcon/>{t("banner.ul1")}</li>
                        <li><BannerIcon2/>{t("banner.ul2")}</li>
                        <li><BannerIcon3/>{t("banner.ul3")}</li>
                        <li><BannerIcon4/>{t("banner.ul4")}</li>
                        <li className="loq"><LocationSvgBanner/>{t("banner.ul5")}</li>
                    </ul>
                </div>
                <div className="right" >
                    <img data-aos={"fade-left"} src="/images/banner-right.png" alt="Yoou Power power banks station image" />
                </div>
            </div>
            </Container>
            
        </BannerWrapper>
    );
};

export default Banner;