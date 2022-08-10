import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import model1 from "../images/model1.png";
import model2 from "../images/model2.png";
import model3 from "../images/model3.png";
import model4 from "../images/model4.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next";

const Sect2 = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  React.useEffect(() => {
    Aos.init({
        duration: 1000
    })
}, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
//JSX
  return (
    <Sec2 >
      <div className="container"  data-aos="zoom-in-up">
        <div className="texts py-5">
          <h1>{t("sect2.str")}</h1>
          <h6>
          {t("sect2.str1")}<br /> {t("sect2.str2")}
          </h6>
        </div>
        <Slider {...settings}>
          <div id="image">
            <img src={model4} alt="" />
            <h6>{t("sect2.str3")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
              {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model1} alt="" />
            <h6>{t("sect2.str6")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
              {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model2} alt="" />
            <h6>{t("sect2.str7")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
            {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model3} alt="" />
            <h6>{t("sect2.str8")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
              {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model4} alt="" />
            <h6>{t("sect2.str9")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
            {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model3} alt="" />
            <h6>{t("sect2.str8")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
            {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model1} alt="" />
            <h6>{t("sect2.str6")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
              {t("sect2.str5")}
            </a>
          </div>
          <div id="image">
            <img src={model2} alt="" />
            <h6>{t("sect2.str7")}</h6>
            <p>
            {t("sect2.str4")}
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="text"
            >
              {t("sect2.str5")}
            </a>
          </div>
        </Slider>
        <h4 className="hash-s text-light text-center pt-5">Swipe</h4>
        <h5 className="text-light text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
</svg></h5>
      </div>
    </Sec2>
  );
};
//Styles
const Sec2 = styled.div`
  border-top: rgba(255, 110, 64, 1) 2px solid;
  height: max-content;
  background: #363636;
  color: #fff;
  padding-bottom: 100px;
  padding-top: 10px;
  .texts {
    text-align: center;
  }
  h1 {
    font-weight: bold !important;
    font-size: 48px !important;
  }
  img {
    width: 100%;
  }
  .text {
    color: rgba(255, 110, 64, 1);
    border-bottom: 1px solid;
    border-color: transparent;
    transition: 1s;
    &:hover {
      border-color: white;
    }
  }
  .hash-s, h5{
    display: none;
  }
  h6 {
    padding-top: 10px;
  }
  @media (max-width:600px){
    .hash-s, h5{
    display: block;
  } 
  }
`;

export default Sect2;
