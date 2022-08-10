import React from 'react'
import Footer from '../components/Footer';
import styled from 'styled-components';
import bg from '../images/bg.png';
import data from '../object/Data'
import ava from "../images/first.png";
import { Link } from "react-router-dom"

const Center = ({user}) => {
  //JSX
  return (
    <Phot>
        <aside>
                <div className="container">
                <div className="content">
          <h1>
            Our craftsmen make <br /> visitors beautiful <br /> and happier
          </h1>
          <h6>
            Text placed at the bottom <br /> of the title to reveal details
          </h6>
        </div>
        {/* <div className="content-head my-5">
          <div className="left d-flex">
            <img src={ava} alt="" />
            <h1>
              Jane <br /> Cooper
            </h1>
          </div>
          <div className="center py-5">
            <h5>
              My name is Jane Cooper and I graduated <br /> from a special
              training school for <br /> barbers. My level of knowledge is
              average. <br /> I have been working in this field for 5 years.
            </h5>
          </div>
          <div className="right py-5  px-4">
            <h5>
              I know all kinds of styles. <br /> For example: shaving, <br />{" "}
              beard, haircut, waxing.
            </h5>
          </div>
        </div> */}
        <div className="row all mt-5">
          {data.map((el) => {
            return (
              <div id="col" className="col-lg-3 col-md-4 col-sm-6 my-3">
                <img src={el.image} alt="dataPhoto" />
              </div>
            );
          })}
        </div>
        <Link to="/masters">
        <div className="btns d-flex justify-content-end">
        <button className="see-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
</svg>
            Back 
          </button>
        </div>
          </Link>
                </div>
            </aside>
        <Footer/>
    </Phot>
  )
}
//Styles
const Phot = styled.div`
  background: #363636;
  .content {
    background: url(${bg}) no-repeat center center/cover;
    width: 100%;
    height: 500px;
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
  .ikki {
    margin-left: -10px;
  }
     .see-btn {
    text-align: center;
    width: 150px;
    margin-bottom: 30px;
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
  .all {
    display: flex;
    justify-content: center;
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
  }
  .all {
    margin-bottom: 40px;
  }

    @media all and (max-width: 1000px) {
    .content-head {
      height: 230px;
    }
  .content-head  h5{
        font-size: 15px;
        line-height: 20px;
      }
      .content-head .left h1{
        padding-top: 60px;
        padding-right: 10px;
        font-size: 35px;
      }
    .content {
      padding-top: 77px;
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
    .content-head   .left h1{
      padding-top: 90px;
      font-size: 25px;
    }
  .content-head  .center h5{
      font-size: 11px;
      line-height: 12px;
    }
    .content-head  .right h5{
      font-size: 11px;
      line-height: 12px;
    }
  }
  @media all and (max-width:523px){
    .center{
      display: none;
    }
    .content-head .left h1{
      font-size: 40px;
    }
  .content-head  .right h5{
    padding-top: 55px;
  }
  }
`
export default Center;