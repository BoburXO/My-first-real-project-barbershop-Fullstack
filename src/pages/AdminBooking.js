import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const AdminBooking = () => {
  useEffect(() => {
    document.title = `Admin Bookings | COOL BARBER`;
  }, []);
  const [booking, setBooking] = useState("")
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/booking/")
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const BookingDelete = async (id) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/booking/${id}`);
      window.location.reload();
      console.log("Data deleted.");
    } catch (error) {
      alert(error);
    }
  };

  if (!booking) {
    return "";
  }
//JSX
  return (
    <Bookings>
      <nav className="nuvv">
        <div className="container">
          <div className="pinalt">
            <Link className="text-light" to="/admincoolbarberprivate">
              <h5>Admin Panel</h5>
            </Link>
            <Link className="text-light" to="/clientadminforadmin">
              <h5>Clients</h5>
            </Link>
            <Link className="text-light" to="/adminBookingforadmin">
              <h5>Complited Bookings</h5>
            </Link>
            <a href="#" className="text-light">
              <h5  onClick={() => {localStorage.removeItem("token")
            window.location.reload()  
            }
            }>Log Out  <svg
            style={{marginLeft:"5px"}}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg></h5>
            </a>
          </div>
        </div>
      </nav>
      <header>
        <div className="container">
          <div className="row">
            <h1 className="text-center text-light py-5">Booking Proccess</h1>
           {booking.length > 0 ? (
             booking.map((el) => {
              return(
                <div className="d-flex justify-content-between borderr col-lg-12 col-md-12 col-sm-12">
                  <Tooltip title="Client ID" placement="left"><h6>{el.booking_client}</h6></Tooltip>
                  <Tooltip title="Barber ID" placement="left"><h6>{el.booking_barber}</h6></Tooltip>
                  <Tooltip title="Start date time" placement="left"><h6>{el.start_date_time}</h6></Tooltip>
                  <Tooltip title="End date time" placement="left"><h6>{el.end_date_time}</h6></Tooltip>
                  <Tooltip title="Booking ID" placement="left"><h6>{el.id}</h6></Tooltip>
                  <button className="btn btn-primary dlt" 
                  onClick={() => {
                    BookingDelete(el.id)
                  }}
                  >Delete</button>
                </div>
              )
            })
           ): (
            <h1 className="text-center text-light mt-5 pt-5">There is nothing here yet !</h1>
           )}
          </div>
        </div>
      </header>
    </Bookings>
  );
};
//Styles
const Bookings = styled.div`
  background: #363636;
  color: #fff;
  height: max-content;
  padding-bottom: 504px;
  .nuvv {
    padding-top: 5px;
    height: 80px;
    background: #363636;
    border-bottom: 2px solid rgba(255, 110, 64, 1);
  }
  .borderr h6{
      cursor: pointer !important;
      font-size: 18px;
    }
  .borderr{
    height: 40px;
    padding-top: 10px;
    border: solid 1px rgba(255, 110, 64, 1);
  }
  .pinalt {
    padding-top: 25px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pinalt a h5:hover {
    color: rgba(255, 110, 64, 1);
  }
  .dlt{
   height: 22px;
   font-size: 15px;
   padding-bottom: 12px !important;
   padding-top: 0px;
   background: rgba(255, 110, 64, 1);
   border: rgba(255, 110, 64, 1);
  }
  @media all and (max-width: 768px) {
    .borderr h5{
      cursor: pointer;
      font-size: 10px;
    }
    .dlt{
   height: 15px;
   font-size: 10px;
   padding-top: 0px;
   background: rgba(255, 110, 64, 1);
   border: rgba(255, 110, 64, 1);
  }
    .borderr{
    height: 25px;
    padding-top: 4px;
    border: solid 1px rgba(255, 110, 64, 1);
  }
  }
  @media all and (max-width: 500px) {
    .nuvv {
      height: 150px;
      padding-bottom: 0px;
      padding-top: 0;
    }
    .pinalt {
      display: block;
      line-height: 90px;
    }
    .borderr{
    height: 25px;
    padding-top: 6px;
    border: solid 1px rgba(255, 110, 64, 1);
    h6{
      font-size: 10px !important;
    }
  }
  }
`;
export default AdminBooking;
