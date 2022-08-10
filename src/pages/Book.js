import React, { useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Context } from "../context/context";

const Portfolio = ({ user }) => {
  const { dataSearch, mura, searchText } = useContext(Context);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    document.title = `${t("nav4")} | COOL BARBER`;
  }, [t]);
//JSX
  return (
    <Books>
      <Nav user={user} />
      <div className="container">
        <div className="all my-5">
          <h1 className="text-light text-center py-3">{t("book.post")}</h1>
        <div className="inp text-center my-4">
        <input type="text"
        placeholder={t("book.post8")}
      value={mura}
      onChange={searchText.bind(this)}
      />
        </div>
          <div className="row">
            {dataSearch.map((el) => {
              return (
                <div className="hove col-lg-4 col-md-4 col-sm-6">
                  <div className="foote  d-flex flex-column align-items-center  text-center">
                    <Link to={`/book/${el.id}`}>
                      <LazyLoadImage src={el.image} alt="" effect="blur" />
                      <h2 className="text-light">{el.username}</h2>
                    </Link>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={5}
                        precision={1}
                      />
                    </Stack>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </Books>
  );
};
//Styles
const Books = styled.div`
  list-style: none;
  text-decoration: none;
  background: #363636;
  .all {
    position: relative;
  }
  .ckYlNc .image {
    margin-top: 0px !important;
  }
  input{
    height: 40px;
    width: 250px;
    border: none;
    border-bottom: 3px solid rgba(255, 110, 64, 1);
    background: none;
    color: #fff;
    font-size: 20px;
    padding: 0 10px;
    outline: none;
  }
  .hove img {
    margin-top: 20px;
    opacity: 1;
    display: block;
    width: 100%;
    height: 320px;
    transition: 0.5s ease;
    backface-visibility: hidden;
    object-fit: contain;
  }
  .MuiRating-root {
    display: flex;
    grid-gap: 10px;
  }
  .hove:hover {
    opacity: 1;
  }
  .hove:hover {
    opacity: 1;
  }
  .hove:hover img {
    opacity: 0.3;
    -webkit-box-shadow: 1px 4px 8px 5px rgba(244, 248, 251, 0.2);
    -moz-box-shadow: 1px 4px 8px 5px rgba(244, 248, 251, 0.2);
    box-shadow: 1px 4px 8px 5px rgba(244, 248, 251, 0.2);
    border: 3px solid rgba(255, 110, 64, 1);
  }
  .hove:hover .middle {
    opacity: 1;
  }
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 45%;
    left: 17%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .text {
    background-color: rgba(255, 110, 64, 1);
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    font-size: 20px;
  }
  .foote {
    font-weight: bold;
  }
  .text:hover {
    background: none;
    color: rgba(255, 110, 64, 1);
    border: rgba(255, 110, 64, 1) 3px solid;
    font-weight: bold;
    font-size: 20px;
  }
  @media all and (max-width: 1216px) {
    h1 {
      margin-top: 150px;
      margin-bottom: 20px;
    }
  }
  @media all and (max-width: 1000px) {
    .hove img {
      opacity: 1;
      display: block;
      width: 100%;
      height: 250px !important;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
    .all {
      padding-top: 50px;
    }
    .all h1 {
      margin-top: 30px !important;
    }
  }
  @media all and (max-width: 858px) {
    .all h1 {
      margin-top: 30px !important;
    }
    .all {
      padding-top: 0 !important;
    }
  }
  @media all and (max-width: 768px) {
    .hove img {
      height: 400px;
    }
    .hove {
      margin-top: 20px;
    }
    .middle {
      position: absolute;
      top: 15%;
      left: 50%;
    }
  }
  @media all and (max-width: 575px) {
    .hove img {
      height: 350px !important;
    }
  }
`;

export default Portfolio;
