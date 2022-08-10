import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import book from "../images/booking.png";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {auth} from '../firebase/config'

const FunctionBook = ({ user }) => {
  // const ret = auth.R.replace(/[a-zA-Z]/g, "");
  // console.log(auth);
  const [start, setStart] = useState();
  const [item, setItem] = useState([]);
  const [client, setClient] = useState();
  const [booking, setBooking] = useState();
  const params = useParams();

  // const [data, setData] = useState({start: "", end: "", barber: "", client: ""}) alisher

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/booking/")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const notify = () => toast(" Booking  is  done  success ! ");
  const notok = () => toast.error("Barber bu vaqtda band!");
  const notoks = () =>
    toast.error("Bunday ismli user mavjud! Yoki bu vaqt band qilingan!");

  const Booking = async () => {
    try {
      await Clients();
      await axios
        .post("http://127.0.0.1:8000/booking/", {
          start_date_time: start,
          booking_barber: params.id,
          client_token: client,
        })
        .then((res) => {
          if (res.status === 201) {
            notify();
            postTest();
          }
          if (res.status === 200) notok();
        });
    } catch (error) {
      const errorMessage = +error.message.slice(31, 35);
      if (errorMessage === 400) notoks();
    }
    setStart("");
    setClient("");
    setBooking("");
  };
  const Clients = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/client/", {
        username: booking,
        token: booking,
      });
    } catch (error) {
      if (+error.message.slice(31, 35) === 400)
        console.log("Bunday ismli user mavjud! Yana bir marta urinib koring.");
    }
  };

  const postTest = () => {
    const date = item[0].start_date_time;
    axios.post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>

          <b>Barber ID:  ${item[0].booking_barber}</b>
          <b>Client ID:  ${item[0].booking_client}</b>
          <b>Date:  ${date.slice(0,4)}/${date.slice(5,7)}/${date.slice(8,10)}</b>
          <b>Time:  ${date.slice(11, 16)}</b>

          <b>Booking is done</b>
<b>Call Center: +998 99 855 73 85</b>`
      )} &parse_mode=html`
    );
  };

  //JSX
  return (
    <Function>
      <Nav user={user} />
      <div className="container">
        <div className="row rov gx-1 my-5">
          <h1 className="text-center hash text-light">{t("book.post1")}</h1>
          <div id="book" className="col-lg-6 col-md-12 col-sm-12">
            <img className="book" src={book} alt="" />
          </div>
          <div id="borde" className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="mt-4 text-center text-light">{t("book.post2")}</h2>
            <form method="#">
              <div className="start d-flex justify-content-center mt-2">
                <h3 className=" pt-2 text-light">{t("book.post3")}</h3>
                <input
                  id="bookInput"
                  type="datetime-local"
                  onChange={(e) => setStart(e.target.value)}
                  value={start}
                  className="form-control"
                  defaultValue=""
                  required
                />
              </div>
            </form>
            <div className="start d-flex justify-content-center mt-2">
              <h3 className="pt-2 text-light">{t("notes.str2")}</h3>
              <input
                id="bookInput"
                className="form-control"
                onChange={(e) => setBooking(e.target.value)}
                value={booking}
                placeholder={t("book.post4")}
                disabled={!start}
              />
            </div>
            <div className="start d-flex justify-content-center">
              <h3 className="pt-3 text-light">{t("book.post10")}</h3>
              <input
                placeholder={t("book.post12")}
                id="bookInput"
                className="form-control mt-2"
                onChange={(e) => {
                  setClient(e.target.value);
                }}
                value={client}
                disabled={!booking}
              />
            </div>
            <div className="box-check">
              <button
                onClick={() => {
                  Booking();
                }}
                disabled={!client}
                id="tuch"
                type="submit"
              >
                {t("book.post5")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Function>
  );
};

//Styles
const Function = styled.div`
  background: #363636;
  height: max-content;
  padding-bottom: 50px;
  .Toastify__toast-theme--light {
    background: #363636;
    color: #fff;
    svg {
      color: #fff;
    }
  }
  .box-check button {
    margin-left: 220px;
  }
  #tuch {
    width: 130px;
    margin-right: 20px;
    height: 40px;
    background: rgba(255, 110, 64, 1);
    color: #fff;
    margin-top: 20px;
    font-size: 17px;
  }
  #tuch:hover {
    cursor: pointer;
    color: rgba(255, 110, 64, 1);
    background: #fff;
    font-weight: bold;
    border: rgba(255, 110, 64, 1) 2px solid;
  }
  .rov {
    margin-bottom: 50px !important;
  }
  .book {
    width: 100%;
    height: 400px;
  }
  .accept {
    background: none;
  }
  .start {
    grid-gap: 20px;
  }
  #borde {
    padding-top: 50px;
    border: dashed rgba(255, 110, 64, 1);
  }
  #bookInput {
    height: 40px;
    width: 200px;
    border: none;
    border: 1px solid rgba(255, 110, 64, 1);
    background: none;
    color: #fff;
    padding: 0 10px;
    outline: none;
  }
  input:focus {
    background: none;
    color: #fff;
  }
  .hash {
    padding-bottom: 30px;
  }
  h3 {
    min-width: 100px !important;
  }
  .box-check {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    grid-gap: 30px;
    margin-right: 0 !important;
    margin-bottom: 10px !important;
  }
  @media all and (max-width: 1216px) {
    #book {
      height: 400px;
    }
    .hash {
      padding-top: 6rem !important;
    }
    .box-check {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      grid-gap: 30px;
      margin-right: 0 !important;
      margin-bottom: 10px !important;
    }
  }
  #tuch {
    margin-right: 0 !important;
  }
  .left {
    padding-top: 20px;
    #borde {
      padding-bottom: 30px;
    }
  }
  @media all and (max-width: 1400px) {
    .box-check {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      grid-gap: 30px;
      margin-right: 0 !important;
      margin-bottom: 10px !important;
    }
  }
  @media all and (max-width: 992px) {
    #borde {
      margin-top: 20px;
      padding-top: 0 !important;
      padding-bottom: 25px;
      margin-bottom: 50px;
    }
    .box-check {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      grid-gap: 30px;
      margin-right: 0 !important;
      margin-bottom: 10px !important;
    }
  }
  @media all and (max-width: 858px) {
    .hash {
      padding-top: 0 !important;
    }
  }
`;
export default FunctionBook;
