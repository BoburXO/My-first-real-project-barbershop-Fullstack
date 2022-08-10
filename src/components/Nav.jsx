import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Vector.svg";
import location from "../images/location.svg";
import phone from "../images/phone.svg";
import { auth } from "../firebase/config";
import { useTranslation } from "react-i18next";

const Nav = ({ user }) => {
  const { t, i18n } = useTranslation();
  // console.log(auth.a.a.f);

  if (!user) {
    return <div>Loading</div>;
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Nuv>
      <nav>
        <div className="container">
          <div className="navbar">
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
              <i className="fa-solid fa-bars"></i>
            </label>
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              {t("title")}
            </Link>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("selector")}
              </button>
              <span className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <button onClick={() => changeLanguage("en")} className="dropdown-item" href="#">
                    English
                  </button>
                </li>
                <li>
                  <button onClick={() => changeLanguage("ru")} className="dropdown-item" href="#">
                    Русский
                  </button>
                </li>
              </span>
            </div>
            <a
              target="_blank"
              className="navba d-flex"
              href="https://www.google.com/maps/place/302+W+50th+St,+New+York,+NY+10019,+USA/@40.762342,-73.9888698,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25856f01ffd3d:0x3648ae33fc011045!8m2!3d40.762342!4d-73.9866811"
            >
              <div className="ppp flex-direction-column pt-2">
                <p>302 W 50th St,</p>
                <p>NY, NY 10019</p>
              </div>
              <img
                src={location}
                alt=""
                width="40"
                height="34"
                className="ikon d-inline-block align-text-top mt-2"
              />
            </a>
            <a
              target="_blank"
              className="navba ong d-flex"
              href="tel:+998998557385"
            >
              <div className="ppp flex-direction-column pt-2">
                <p>8 (800) 000-00-00</p>
                <p>{t("nav")}</p>
              </div>
              <img
                src={phone}
                alt=""
                width="40"
                height="34"
                className="ikon d-inline-block align-text-top mt-2"
              />
            </a>
            <ul className="ul">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("selector")}
              </button>
              <span className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <button onClick={() => changeLanguage("en")} className="dropdown-item" href="#">
                    English
                  </button>
                </li>
                <li>
                  <button onClick={() => changeLanguage("ru")} className="dropdown-item" href="#">
                    Русский
                  </button>
                </li>
              </span>
            </div>
              <li>
                <Link to="/">{t("nav1")}</Link>
              </li>
              <li>
                <Link to="/masters">{t("nav2")}</Link>{" "}
              </li>
              <li>
                <Link to="/notes">{t("nav3")}</Link>
              </li>
              <li>
                <Link to="/book">{t("nav4")}</Link>
              </li>
              <li>
                <div className="profile">
                  <img
                    src={user.photoURL}
                    alt="auth user"
                    className="userImage"
                  />
                  <div className="options">
                    <span className="log">
                      <button
                        className="authButton"
                        onClick={() => auth.signOut()}
                      >
                        {t("nav5")}
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Nuv>
  );
};
const Nuv = styled.div`
.dropdown-toggle{
  background: #363636;
  border: rgba(255, 100, 64, 1) 1px solid;
  margin-bottom: 10px;
}
  select {
    height: 35px;
    width: 65px;
    border-bottom: rgba(255, 100, 64, 1) 5px solid;
    border-left: rgba(255, 100, 64, 1) 5px solid;
  }
  .dropdown-item{
    font-size: 17px;
    font-weight: 500;
  }
  .profile {
    margin-left: 70px;
    img {
      margin-left: 30px;
      margin-bottom: 5px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    .options {
      display: none;
      background-color: var(--main-color);
      border-radius: 5px;
      height: 80px;
      align-items: center;
      text-align: center;
    }
    span {
      padding: 14px;
      cursor: pointer;
      button {
        width: 60px;
        height: 30px;
        background-color: #fff;
        color: #363636;
        border: 2px solid rgba(255, 100, 64, 1);
        cursor: pointer;
        font-weight: bold;
        border-radius: 5px;
      }
    }
    &:hover {
      .options {
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 50px;
      }
    }
  }
  nav {
    border-bottom: 3px solid rgba(255, 110, 64, 1);
    height: 5rem;
    width: 100%;
    /* position: fixed !important; */
    background: #363636;
    top: 0 !important;
  }
  .btnn-nav {
    background: rgba(255, 110, 64, 1);
    color: #fff;
    width: 60px;
    height: 30px;
    border-radius: 10px;
    transition: 0.5s ease;
  }
  .btnn-nav:hover {
    background: white;
    color: rgba(255, 110, 64, 1);
  }
  .navbar-brand {
    color: #fff;
    margin-left: 25px;
    transition: 0.5s ease;
  }
  .navbar-brand:hover {
    border-bottom: 1px solid rgba(255, 110, 64, 1);
  }
  nav a {
    color: white;
  }
  .fa-bars {
    color: rgba(255, 110, 64, 1);
  }
  .ul {
    font-size: 17px;
    padding-top: 8px;
    align-items: center;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
  .ul li a {
    color: white;
    transition: 0.5s ease;
  }
  .ul li a:hover {
    color: rgba(255, 110, 64, 1);
  }
  .checkbtn {
    font-size: 30px;
    float: right;
    cursor: pointer;
    display: none;
  }
  #check {
    display: none;
  }

  @media (min-width: 1215px) {
    .ul{
      .dropdown-toggle{
        display: none;
      }
    }
    .ul li a{
      margin-left: 10px;
      margin-right: 10px;
    }
    .profile img{
      margin-right: 30px;
    }
    .log .authButton{
      margin-right: 0px !important;
    }
  }

  @media all and (max-width: 1216px) {
    .profile img {
      width: 40px;
      height: 40px;
      margin-left: 100px !important;
      margin-bottom: 7px !important;
    }
    .logo {
      font-size: 20px;
      padding-left: 50px;
    }
    nav .ul li a {
      font-size: 15px !important;
    }
    .checkbtn {
      display: none;
    }
    .ong{
      margin-right: 30px;
    }
    .ul {
      border-left: 3px solid rgba(255, 110, 64, 1);
      border-right: 3px solid rgba(255, 110, 64, 1);
      border-bottom: 3px solid rgba(255, 110, 64, 1);
      width: 100% !important;
      height: 10vh;
      background: #363636;
      position: absolute;
      z-index: 99;
      top: 70px;
      left: 0;
      text-align: center;
      padding-right: 80px !important;
      .dropdown-toggle{
        display: none !important;
      }
    }
    nav ul li a {
      display: block;
    }
    .authButton{
      margin-left: 80px !important;
    }
  }
  @media all and (max-width: 992px) {
    .authButton{
      margin-left: 80px;
    }
    .ul li a{
      margin-left: 15px;
      margin-right: 15px;
    }
    .ul li a {
      font-size: 15px !important;
    }
    .ul{
      padding-left: 70px !important;
    }
    .profile img {
      width: 40px;
      margin-bottom: 5px;
      height: 40px;
      margin-left: 100px !important;
    }
  }
  @media all and (max-width: 858px) {
    .checkbtn {
      display: block;
      margin-left: 35px;
    }
    .btnn-nav {
      width: 70px;
    }
    .profile {
      margin-right: 30px;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .navba img {
      margin-top: 13px !important;
    }
    .ul {
      position: absolute !important;
      z-index: 99;
      width: 65% !important;
      height: 100vh;
      border: 3px solid rgba(255, 110, 64, 1);
      background: #363636;
      top: 70px;
      left: -120%;
      text-align: center;
      transition: all 0.5s;
    }
   nav .ul li a{
      font-size: 25px !important;
      line-height: 20px;
    }
    .profile img{
      width: 40px;
      height: 40px;
      margin-left: -40px !important;
    }
    nav ul {
      display: block;
      flex-direction: column !important;
    }
    #check:checked ~ ul {
      left: 0;
    }
  }
  @media all and (max-width: 768px) {
    .dropdown-toggle{
      margin-top: 5px !important;
    }
  }
  @media all and (max-width: 700px) {
    nav {
      grid-gap: 30px;
      font-size: 10px !important;
    }
    .navba {
      grid-gap: 20px;
    }
    .navba img {
      margin-top: 5px !important;
    }
    .navbar-brand {
      font-size: 20px;
      margin-top: 10px;
    }
    .navba img {
      width: 45px;
      height: 45px;
    }
    .checkbtn {
      margin-right: 20px;
    }
    #check:checked ~ ul {
      left: 0;
    }
    .ppp {
      display: none;
    }
    .ul li a {
      font-size: 20px !important;
    }
    .ul {
      position: absolute !important;
      position: absolute;
      z-index: 99;
      width: 100% !important;
      height: 100vh;
      border: 3px solid rgba(255, 110, 64, 1);
      background: #363636;
      top: 70px;
      left: -120%;
      text-align: center;
      transition: all 0.5s;
    }
  }
  @media all and (max-width: 768px) {
    .navbar{
      padding-top: 10px;
    }
    nav {
      grid-gap: 30px;
      font-size: 10px !important;
    }
    .navba {
      grid-gap: 20px;
    }
    .navba img {
      margin-top: 2px !important;
    }
    .navbar-brand {
      font-size: 20px;
      margin-top: 10px;
    }
    .navba img {
      width: 38px;
      height: 38px;
    }
    .checkbtn {
      margin-top: 8px;
      margin-left: 25px;
    }
    .ppp {
      display: none;
    }
    .ul {
      position: absolute !important;
      width: 101% !important;
      height: 100vh;
      border: 3px solid rgba(255, 110, 64, 1);
      background: #363636;
      top: 70px;
      left: -130%;
      text-align: center;
      transition: all 0.5s;
    }
  }

  @media all and (max-width: 500px) {
    .ul li a{
      font-size: 20px !important;
    }
    .navbar{
      justify-content: center;
    }
    .ppp {
      display: none;
    }
    .dropdown-toggle{
      margin-top: 5px !important;
    }
    .navbar-brand {
      font-size: 20px;
      margin-top: 10px;
    }
    .navba img {
      width: 50px;
      height: 40px;
    }
    #check:checked ~ ul {
      left: 0;
    }
  }
  @media all and (max-width: 500px) {
    .ul li a{
      font-size: 20px !important;
    }
    .ul {
      margin: auto !important;
      position: absolute !important;
      width: 100% !important;
      height: 100vh;
      border: 3px solid rgba(255, 110, 64, 1);
      background: #363636;
      top: 70px;
      text-align: center !important;
    }
    .navba img {
      display:none !important;
      width: 40px;
      height: 40px;
      margin-bottom: 0px;
    }
    #check:checked ~ ul {
      left: 0;
    }

  }
  @media all and (max-width: 433px) {
    .dropdown-toggle{
      margin-top: 5px;
      margin-right: 20px;
    }
    .navba {
      display: none !important;
    }
  }
  @media all and (max-width: 393px) {
    .navba img {
      display: none !important;
    }
    .ul {
      position: absolute !important;
      width: 100% !important;
      height: 84.5vh;
      border: 3px solid rgba(255, 110, 64, 1);
      background: #363636;
      top: 70px;
      left: -119%;
      text-align: center !important;
    }
    #check:checked ~ ul {
      left: 0;
    }
    .checkbtn {
      margin-top: 10px;
    }
    .navbar-brand {
      font-size: 20px;
      margin-top: 10px;
    }
    /* .navbar-brand img{
      margin-top: 10px !important;
    } */
  }
   @media all and (max-width: 348px) {
    .dropdown-toggle{
        display: none;
    }
    .ul {
      .dropdown-toggle {
        width: 70px;
        margin-left: 20px !important;
        display: block !important;
      }
   }
  }
  @media all and (max-width: 288px) {
    .navbar-brand img {
      display: none !important;
    }
  }
  @media all and (max-width: 328px) {
    .ul li a{
      font-size: 15px !important;
    }
    .dropdown-toggle{
        display: none;
    }
    .ul {
      .dropdown-toggle {
        display: block !important;
      }
    }
  }
`;

export default Nav;
