import React from "react";
import styled from "styled-components";
import loca from "../images/location.svg";
import phone from "../images/phone.svg";
import gmail from "../images/gmail.svg";
import time from "../images/time.svg";
import email from "../images/gmail.png";
import map from "../images/map.png";
import tg from "../images/tg.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
//JSX
  return (
    <Foot>
      <div className="container-fluid">
        <footer>
          <div className="row gx-0">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <iframe
                src="https://yandex.com/map-widget/v1/?um=constructor%3Af497e858df9d5070755271a977311babae60d25aa64b0c0d6553804464f55379&amp;source=constructor"
                frameborder="0"
              ></iframe>
            </div>
            <div className="right-side col-lg-6 col-md-6 col-sm-12">
              <h2 className="text-light text-center pt-4">{t("footer.five")}</h2>
              <div className="categories pt-4">
                <div className="twince d-flex align-items-center pt-3">
                  <img src={loca} alt="Our location" />
                  <h5 className="text-light">302 W 50th St, NY, NY 10019</h5>
                </div>
                <div className="twince d-flex align-items-center pt-3">
                  <img src={phone} alt="Phone number" />
                  <h5 className="text-light"> (+998)99 855-73-85</h5>
                </div>
                <div className="twince d-flex align-items-center pt-3">
                  <img src={gmail} alt="Email and Gmail" />
                  <h5 className="text-light">CoolBarber@gmail.com</h5>
                </div>
                <div className="twince d-flex align-items-center">
                  <img src={time} alt="" />
                  <h5 className="text-light">{t("footer.four")}</h5>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="footerdiv">
        <div className="qr flex-direction-column">
          <img src={email} alt="Email" />
          <h3 className="text-light">{t("footer.one")}
          </h3>
        </div>
        <div className="qr flex-direction-column">
          <img src={map} alt="Map" />
          <h3 className="text-light">{t("footer.three")}</h3>
        </div>
        <div className="qr flex-direction-column">
          <img src={tg} alt="telegram" />
          <h3 className="text-light">{t("footer.two")}</h3>
        </div>
      </div>
      <div className="tg text-center text-light">
        <a
          target="_blank"
          href="https://t.me/+YJdPUtUHRNo5NTM6"
        >
          {t("footer.six")}
        </a>
      </div>
    </Foot>
  );
};
//Styles
const Foot = styled.div`
  background: #363636;
  height: max-content;
  .right-side {
    height: max-content;
    padding-bottom: 36px;
    background: rgba(37, 29, 26, 1);
    border: rgba(255, 110, 64, 1) 2px solid;
  }
  .categories .twince {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .categories {
    margin-top: 30px !important;
    padding-bottom: 0px;
  }
  .twince img {
    width: 50px;
    height: 50px;
  }
  .footerdiv {
    background: #363636;
    padding-top: 20px;
    height: max-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    grid-gap: 20px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }
  }
  iframe {
    height: 500px;
    width: 100%;
  }
  .tg {
    background: #363636;
    height: max-content;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .tg a {
    font-size: 20px;
    color: #fff;
    text-decoration: underline;
  }
  @media all and (max-width: 662px) {
    .footerdiv {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-gap: 10px;
      img{
        width: 150px;
        height: 150px;
      }
    }
  }
  @media all and (max-width: 500px) {
    .footerdiv {
      display: flex;
      flex-direction: column;
      grid-gap: 0px;
      padding-bottom:40px;
      img{
        width: 200px;
        height: 200px;
      }
      h3{
        text-align: center;
      }
    }
  }
`;
export default Footer;
