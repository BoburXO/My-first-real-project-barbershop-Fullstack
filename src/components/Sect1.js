import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import photo6 from "../images/photo6.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next";

const Sect1 = () => {
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
    <Sec>
      <div className="container">
        <div className="text py-5">
          <h1> {t("sect1.post")}</h1>
          <p>
          {t("sect1.post1")}
           <br /> {t("sect1.post2")}
           <br />
           {t("sect1.post3")} 
          </p>
        </div>

        <div className="all row gx-0">
            <div className="top col-lg-6 col-md-12">
                <img src={photo1} alt="" />
                <div className="row gx-0">
                    <div className="bottom col-6 col-md-12">
                        <img src={photo4} alt="" />
                        <img src={photo5} alt="" />
                    </div>
                </div>
            </div>
            <div className=" col-lg-6 col-md-12">
                <div className="row gx-0">
                    <div className="tepa col-6 col-md-12">
                        <img src={photo2} alt="" />
                        <img src={photo3} alt="" />
                    </div>
                </div>
                <img className="pas gx-0" src={photo6} alt="" />
            </div>
        </div>
            <div className="btns">
               <Link to="/Masters"> <button className="orange">{t("sect1.post4")}</button></Link>
                <a target="_blank" href="https://www.instagram.com/"><button className="prozracniy">{t("sect1.post5")}</button></a>
            </div>
      </div>
    </Sec>
  );
};
//Styles
const Sec = styled.div`
  height: max-content;
  background: #363636;
  color: #fff;
  padding-bottom: 50px;
  .text {
    text-align: center;
    padding-top: 50px;
    h1 {
      font-weight: bold;
      font-size: 48px;
    }
    p {
      color: #efe7e2;
      font-size: 15px;
      line-height: 20px;
    }
  }
  .all{
      margin-bottom: 50px;
  }
  .top img{
      width: 570px;
      height: 330px;
  }
 .bottom img{
      width: 281px;
      height: 300px;
  }
 .tepa img{
      width: 279px;
      height: 300px;
  }
 .pas{
    width: 557px;
      height: 330px;
  }
  .orange{
      width: 332px;
      height: 68px;
      background: rgba(255, 110, 64, 1);
      color: #fff;
      transition: 0.5s ease;
  }
  .orange:hover{
    border: 2px solid #fff;
    background: none;
    transition: 0.5s ease;  
  }
  .prozracniy{
      width: 136px;
      height: 68px;
      background: none;
      color:#fff;
      border: 2px solid #fff;
      transition: 0.5s ease;  
  }
  .prozracniy:hover{
    background: rgba(255, 110, 64, 1);
    border:0;
    transition: 0.5s ease;  
  }
  .btns{
      display: flex;
      justify-content: center;
      grid-gap: 20px;
  }
  @media all and (max-width:2915px) {
    .all {
      text-align: center;
    }
    .bottom img{
      width: 285px;
      height: 300px;
  }  
  }
  @media all and (max-width:1920px) {
    .bottom img{
      width: 285px;
      height: 300px;
  }   
  }
  @media all and (max-width:1400px) {
    .bottom img{
      width: 279px;
      height: 300px;
  }   
  }
  @media all and (max-width:1200px) {  
    .all img {
        width: 100%;
        height: 450px;
    }
  }
  @media all and (max-width:768px) { 
    .all img {
      height: 300px;
    }
    .all .bottom {
        display: flex;
    }
    .all .tepa{
        display: flex;
    }
  }
  @media all and (max-width:500px) {
    .all img{
        height: 300px;
    }
    .btns{
        text-align: center;
        flex-direction: column;
    }
  } 
  @media all and (max-width:393px) { 
    .all img {
      height: 210px;
    }
      .orange{
          width: 200px;
      }
      .prozracniy{
          width: 200px;
      }
   }  
`;
export default Sect1;
