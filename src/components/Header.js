import React from "react";
import bg from "../images/BgHeader.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import home from "../images/home.png";
import boy from "../images/boy.png";
import girl from "../images/girl.png";
import Aos from 'aos'
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  React.useEffect(() => {
    Aos.init({
        duration: 2000
    })
}, [])
//JSX
  return (
    <Head>
      <div className="container">
        <div className="main">
          <div className="glav">
            <div className="left"  data-aos="fade-right">
              <h1>
              {t("header.text")} <br /> {t("header.text1")}
              </h1>
            </div>
            <div className="right"  data-aos="fade-left">
              <button>{t("header.text2")}</button>
              <p>
              {t("header.text3")} <br /> {t("header.text4")}
              </p>
            </div>
          </div>
          <div data-aos="fade-down" className="btn-div">
            <Link to="/book">
              <button>{t("header.text5")}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="end">
          <div className="container">
            <div data-aos="fade-up" className="box pt-5 text-center">
              <div className="row text-light gx-0">
                <div className="apps col-lg-4 col-md-6 col-sm-12">
                  <img src={home} alt="" />
                  <h3 className="my-3">{t("header.text6")}</h3>
                  <h6>{t("header.text7")}<br /> {t("header.text8")} </h6>
                </div>
                <div className="apps col-lg-4 col-md-6 col-sm-12">
                  <img src={boy} alt="" />
                  <h3 className="my-3">{t("header.text6")}</h3>
                  <h6>{t("header.text7")} <br />{t("header.text8")}</h6>
                </div>
                <div className="boot apps col-lg-4 col-md-6 col-sm-12">
                  <img src={girl} alt="" />
                  <h3 className="my-3">{t("header.text6")}</h3>
                  <h6>{t("header.text7")} <br /> {t("header.text8")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Head>
  );
};
//Styles
const Head = styled.div`
    background: url(${bg}) no-repeat center center/cover;
    width: 100%;
    margin: auto !important;
  .main {
  

   
  }
  .glav {
    display: flex;
    justify-content: space-evenly;
    color: #fff;
    padding-top: 40px;
  }
  .right {
    padding-top: 40px;
    line-height: 20px;
  }
  .right button {
    border: 1px solid #fff;
    background: none;
    color: #fff;
    width: 250px;
    height: 25px;
    cursor: default;
    margin-bottom: 30px;
    font-size: 15px;
    letter-spacing: 2px;
  }
  .right p {
    line-height: 20px;
    font-weight: 400;
    font-size: 18px;
  }
  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 60px;
    font-family: "Playfair Display";
  }
  .end {
    background: rgba(37, 29, 26, 1);
    height: 350px;
    width: 100% !important;
    border-top: 3px solid rgba(255, 110, 64, 1);
    border-bottom: 3px solid rgba(255, 110, 64, 1);
  }
  .apps{
    padding-top: 40px;
  }
  .main .btn-div  {
    height: 400px;
    margin-top: 50px;
    margin-left: 180px;
  }
  .btn-div button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    width: 194px;
    height: 68px;
    background: rgba(255, 110, 64, 1);
    color: #fff;
  }
  .btn-div button:active{
    background: #363636;
    border: 3px solid #363636;
  }
  .btn-div button a {
    color: #fff;
  }
  @media all and (max-width: 1216px) {
    .main img {
      width: 100%;
      margin-left: -140px;
    }
    .main .btn-div {
      height: 100px;
      display: flex;
      justify-content: center;
      margin-left: 0px;
    }
    .glav {
      display: block;
      text-align: center;
      padding-top: 150px;
      p {
        font-size: 40px;
        line-height: 40px;
      }
    }
    .btn-div button {
      width: 150px;
      height: 70px;
    }
    .apps{
      padding-top: 0px;
    }
  }
  @media all and (max-width: 992px) {
  .end{
        height: 450px;
      }
    }
  @media all and (max-width: 858px) {
    .glav {
      display: block;
      text-align: center;
      padding-top: 60px;
    }
  }
  @media all and (max-width: 768px) {
    .left h1 {
      font-size: 50px;
    }
    .end{
        height: 650px;
      }
    .right p {
      font-size: 30px;
    }
  }
  @media all and (max-width: 500px) {
    .left h1{
      font-size: 40px;
    }
    .right p {
      font-size: 20px;
    }
  }
  @media all and (max-width: 404px) {
    .left h1 {
      font-size: 40px;
    }
    .right p {
      font-size: 20px;
    }
    .btn-div button{
      height: 40px !important;
      width: 150px !important;
      font-size: 15px !important;
    }
  }
  @media all and (max-width:350px){
    .left h1{
      font-size: 30px;
    }
    .right p {
      font-size: 15px;
    }
  }
`;
export default Header;
