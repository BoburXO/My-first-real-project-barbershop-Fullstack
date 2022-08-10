import React from "react";
import styled from "styled-components";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  React.useEffect(() => {
    Aos.init({
        duration: 1000
    })
}, [])
//JSX
  return (
    <Cost>
      <div className="container">
        <div className="text">
          <h1>{t("aside.text")}</h1>
          <h6>
          {t("aside.text1")}
          </h6>
        </div>
        <div className="all row gx-0">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              src={first}
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <h3 className="hthree my-2 px-4">{t("aside.text2")}</h3>
            <div className="over">
              <div className="text1 d-flex justify-content-around px-4">
                <h5>{t("aside.text5")}</h5>
                <h5>60{t("aside.text9")}</h5>
                <h5>20$</h5>
              </div>
              <div className="text2 d-flex justify-content-around px-4">
                <h5>{t("aside.text6")}</h5>
                <h5>30 {t("aside.text9")}</h5>
                <h5>10$</h5>
              </div>
              <div className="text3 d-flex justify-content-around px-4">
                <h5>{t("aside.text7")}</h5>
                <h5>40 {t("aside.text9")}</h5>
                <h5>30$</h5>
              </div>
              <div className="text4 d-flex justify-content-around px-4">
                <h5>{t("aside.text8")}</h5>
                <h5>30 {t("aside.text9")}</h5>
                <h5>20$</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              src={second}
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <h3 className="ikki hthree my-2">{t("aside.text3")}</h3>
            <div className="over">
              <div className="text1 d-flex justify-content-around px-4">
                <h5>{t("aside.text5")}</h5>
                <h5>50 {t("aside.text9")}</h5>
                <h5>25$</h5>
              </div>
              <div className="text2 d-flex justify-content-around px-4">
                <h5>{t("aside.text6")}</h5>
                <h5>20 {t("aside.text9")}</h5>
                <h5>15$</h5>
              </div>
              <div className="text3 d-flex justify-content-around px-4">
                <h5>{t("aside.text7")}</h5>
                <h5>50 {t("aside.text9")}</h5>
                <h5>35$</h5>
              </div>
              <div className="text4 d-flex justify-content-around px-4">
                <h5>{t("aside.text8")}</h5>
                <h5>25 {t("aside.text9")}</h5>
                <h5>30$</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              src={third}
              alt=""
            />
            <h3 className="uch hthree my-2">{t("aside.text4")}</h3>
            <div className="over">
              <div className="text1 d-flex justify-content-around px-4">
                <h5>{t("aside.text5")}</h5>
                <h5>45 {t("aside.text9")}</h5>
                <h5>30$</h5>
              </div>
              <div className="text2 d-flex justify-content-around px-4">
                <h5>{t("aside.text6")}</h5>
                <h5>30 {t("aside.text9")}</h5>
                <h5>20$</h5>
              </div>
              <div className="text3 d-flex justify-content-around px-4">
                <h5>{t("aside.text7")}</h5>
                <h5>20 {t("aside.text9")}</h5>
                <h5>35$</h5>
              </div>
              <div className="text4 d-flex justify-content-around px-4">
                <h5>{t("aside.text8")}</h5>
                <h5>20 {t("aside.text9")}</h5>
                <h5>40$</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cost>
  );
};
//Styles
const Cost = styled.div`
  border-top: rgba(255, 110, 64, 1) 2px solid;
  background: rgba(37, 29, 26, 1);
  color: #fff;
  height: max-content;
  padding-bottom: 50px;
  padding-top: 50px;
  .text h1,
  h6 {
    text-align: center;
  }
  .all {
    margin-left: 35px;
    margin-bottom: 60px;
  }
  h1 {
    font-weight: bold !important;
    font-size: 48px !important;
  }
  img {
    width: 90%;
    border: 3px solid rgba(255, 110, 64, 1);
    margin-top: 30px;
  }
  .text1 {
    border-bottom: 1px solid rgba(255, 110, 64, 1);
    width: 320px;
    text-align: start;
  }
  .text2 {
    border-bottom: 1px solid rgba(255, 110, 64, 1);
    width: 320px;
    padding-top: 10px;
    text-align: start;
  }
  .text3 {
    border-bottom: 1px solid rgba(255, 110, 64, 1);
    width: 320px;
    padding-top: 10px;
    text-align: start;
  }
  .text4 {
    text-align: start;
    border-bottom: 1px solid rgba(255, 110, 64, 1);
    width: 320px;
    padding-top: 10px;
  }
  .over {
    text-align: center;
  }
  @media all and (max-width: 768px) {
    img {
      margin-left: 10px;
    }
    .over {
      margin-left: 70px;
    }
    .ikki {
      margin-left: 20px;
    }
    .uch {
      margin-left: 20px;
    }
  }
  @media all and (max-width: 482px) {
    img {
      margin-left: 5px;
    }
    .over {
      margin-left: 35px;
    }
  }
  @media all and (max-width: 443px) {
    .over {
      margin-left: 25px;
    }
    .over .text1,
    .text2,
    .text3,
    .text4 {
      width: 280px;
    }
  }

  @media all and (max-width: 400px) {
    .over {
      margin-left: 20px;
    }
  }
  @media all and (max-width: 386px) {
    .over {
      margin-left: 15px;
    }
    img {
      margin-left: 0px;
    }
    .over .text1,
    .text2,
    .text3,
    .text4 {
      width: 250px !important;
    }
  }
  @media all and (max-width: 341px) {
    .over {
      margin-left: -5px;
    }
    .over .text1,
    .text2,
    .text3,
    .text4 {
      width: 200px !important;
    }
  }
`;
export default Aside;
