import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import bg from "../images/bg.png";
import styled from "styled-components";
import ava from "../images/second.png";
import admin from "../images/first.png";
import uch from "../images/third.png";
import data from "../object/Data";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Fixed from "../fixed";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Masters = ({ user }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  React.useEffect(() => {
    document.title = `${t("nav2")} | COOL BARBER`;
  }, [t]);
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  //JSX
  return (
    <Master>
      <Nav user={user} />
      <div className="container">
        <div className="content">
          <h1 data-aos="fade-right">
            {t("masters.post")} <br /> {t("masters.post1")}
            <br /> {t("masters.post2")}
          </h1>
          <h6>
            {t("masters.post3")} <br />
            {t("masters.post4")}
          </h6>
        </div>
        <div className="content-head my-5">
          <div className="left d-flex">
            <img src={ava} alt="" />
            <h1>
              {t("masters.post5")} <br /> {t("masters.post6")}
            </h1>
          </div>
          <div className="center py-5">
            <h5>
              {t("masters.post7")}
              <br /> {t("masters.post8")} <br />
              {t("masters.post9")} <br />
              {t("masters.post10")}
            </h5>
          </div>
          <div className="right py-5  px-4">
            <h5>
              {t("masters.post11")} <br />
              {t("masters.post12")} <br /> {t("masters.post13")}
            </h5>
          </div>
        </div>
        <div className="row all">
          {data.slice(0, 8).map((el) => {
            return (
              <div id="col" className="col-lg-3 col-md-4 col-sm-6 my-3">
                <LazyLoadImage src={el.image} alt="dataPhoto" effect="blur" />
              </div>
            );
          })}
          <Link to="/photo">
            <div className="btns  d-flex justify-content-center">
              <button className="see-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-arrow-repeat py-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                {t("masters.post14")}
              </button>
            </div>
          </Link>
          <div className="orta mt-4">
            <div className="content-head my-3">
              <div className="left d-flex">
                <img src={admin} alt="" />
                <h1>
                  {t("masters.post17")}
                  <br /> {t("masters.post18")}
                </h1>
              </div>
              <div className="center py-5">
                <h5>
                  {t("masters.post15")} <br /> {t("masters.post8")} <br />
                  {t("masters.post9")}
                  <br />
                  {t("masters.post10")}
                </h5>
              </div>
              <div className="right py-5  px-4">
                <h5>
                  {t("masters.post11")} <br />
                  {t("masters.post12")} <br /> {t("masters.post13")}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row all">
          {data.slice(8, 16).map((el) => {
            return (
              <div id="col" className="col-lg-3 col-md-4 col-sm-6 my-3">
                <LazyLoadImage src={el.image} alt="dataPhoto" effect="blur" />
              </div>
            );
          })}
          <Link to="/center">
            <div className="btns  d-flex justify-content-center">
              <button className="see-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-arrow-repeat py-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                {t("masters.post14")}
              </button>
            </div>
          </Link>
        </div>
        <div className="content-head my-5">
          <div className="left d-flex">
            <img src={uch} alt="" />
            <h1>
              {t("masters.post19")} <br /> {t("masters.post20")}
            </h1>
          </div>
          <div className="center py-5">
            <h5>
              {t("masters.post16")} <br /> {t("masters.post8")} <br />{" "}
              {t("masters.post9")} <br /> {t("masters.post10")}
            </h5>
          </div>
          <div className="right py-5  px-4">
            <h5>
              {t("masters.post11")}
              <br /> {t("masters.post12")} <br /> {t("masters.post13")}
            </h5>
          </div>
        </div>
        <div className="row all">
          {data.slice(16, 24).map((el) => {
            return (
              <div id="col" className="col-lg-3 col-md-4 col-sm-6 my-3">
                <LazyLoadImage src={el.image} alt="dataPhoto" effect="blur" />{" "}
              </div>
            );
          })}
          <Link to="/photos">
            <div className="btns d-flex justify-content-center">
              <button className="see-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-arrow-repeat py-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                {t("masters.post14")}
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
      <Fixed />
    </Master>
  );
};
//Styles
const Master = styled.div`
  background: #363636;
  .left h2 {
    display: none;
  }
  .ikki {
    margin-left: -10px;
  }
  .all {
    display: flex;
    justify-content: center;
  }
  .see-btn {
    text-align: center;
    width: 250px;
    margin-top: 30px;
    background: rgba(255, 110, 64, 1);
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    height: 40px;
  }

  .see-btn:hover {
    border: rgba(255, 110, 64, 1) 3px solid;
    background: #fff;
    color: rgba(255, 110, 64, 1);
  }
  .content-head {
    color: #fff;
    display: flex;
    justify-content: space-between;
    background: rgba(37, 29, 26, 1);
    width: 100%;
    height: 180px;
    /* .left img {
    width: 180px;
    height: 180px;
  } */
    .left h1 {
      font-size: 48px;
      font-weight: bold;
      color: #fff;
      padding-left: 20px;
      padding-top: 30px;
    }
  }
  .right h5 {
    padding-top: 10px;
  }
  #col img {
    width: 100%;
    /* height: 300px; */
  }
  .all {
    margin-bottom: 40px;
  }
  .content {
    background: linear-gradient(
        90deg,
        rgba(33, 24, 20, 0.57) 0%,
        rgba(38, 28, 24, 0.42) 100%
      ),
      url(${bg}) no-repeat center center/cover;
    width: 100%;
    height: 600px;
    margin: auto !important;
    h1 {
      font-family: "Playfair Display";
      font-weight: 900;
      font-size: 70px;
      line-height: 77px;
      color: #fff;
      padding-left: 30px;
      padding-top: 10px;
    }
  }
  h6 {
    font-family: "Playfair Display";
    color: #fff;
    padding-left: 30px;
    padding-top: 10px;
    font-size: 18px;
    line-height: 27px;
  }
  @media all and (max-width: 1400px) {
  #col img {
    width: 100% !important;
  }
  #col{
    text-align: center;
  }
  }
  @media all and (max-width: 1216px) {
    .content {
      display: block;
      text-align: center;
      padding-top: 150px;
      h6 {
        font-size: 20px;
        line-height: 40px;
      }
    }
  }
  @media all and (max-width: 1000px) {
    .content-head {
      height: 230px;
    }
    .content-head h5 {
      font-size: 15px;
      line-height: 20px;
    }
    .content-head .left h1 {
      padding-top: 60px;
      padding-right: 10px;
      font-size: 35px;
    }
    .content {
      padding-top: 77px;
    }
   .content h1{
      margin-top: 60px;
    }
  }
  @media all and (max-width: 768px) {
    .content h1 {
      font-size: 40px;
      line-height: 50px;
    }
    .content-head {
      height: 270px;
    }
    .content-head .left h1 {
      padding-top: 90px;
      font-size: 25px;
    }
    .content-head .center h5 {
      font-size: 11px;
      line-height: 12px;
    }
    .content-head .right h5 {
      font-size: 11px;
      line-height: 12px;
    }
  }
  @media all and (max-width: 568px) {
    .center {
      display: none;
    }
    .content-head .left h1 {
      font-size: 40px;
    }
    .content-head .right h5 {
      padding-top: 35px;
    }
  }
  @media all and (max-width: 521px) {
    .center,
    .right {
      display: none;
    }
    .content-head {
      height: 250px;
    }

    .content-head .left h1 {
      padding-left: 30px;
      text-align: center;
      font-size: 50px;
      line-height: 60px;
      align-items: center;
    }
  }
  @media all and (max-width: 471px) {
    .content-head {
      height: 200px;
    }
    .content-head .left h1 {
      font-size: 40px !important;
      line-height: 50px !important;
      padding-top: 50px !important;
    }
  }
  @media all and (max-width: 395px) {
    .content-head .left h1 {
      font-size: 30px !important;
    }
    .content-head .left img {
      width: 50%;
    }
  }
`;
export default Masters;
