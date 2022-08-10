import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import "react-toastify/dist/ReactToastify.css";

const Client = () => {
  React.useEffect(() => {
    document.title = `Admin Clients | COOL BARBER`;
  }, []);
  const [client, setClient] = React.useState("");
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/client/ ")
      .then((res) => {
        setClient(res.data);
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

  if (!client) {
    return "";
  }
//JSX
  return (
    <Klient>
      <nav className="nuvv">
        <div className="container">
          <div className="pinal">
            <Link className="text-light" to="/admincoolbarberprivate">
              <h5>Admin Panel</h5>
            </Link>
            <Link className="text-light" to="/clientadminforadmin">
              <h5>Clients</h5>
            </Link>
            <Link className="text-light" to="/adminBookingforadmin">
              <h5>Complited Bookings</h5>
            </Link>
            <a href="#"  className="text-light">
              <h5 onClick={() => {localStorage.removeItem("token")
            window.location.reload()
            }}>Log Out  <svg
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
      <div className="container">
        <h2 className="text-center text-light py-4">Clients</h2>
        <div className="row gx-0">
          {client.length > 0 ? (
            client.map((el) => {
              return (
                <div className="col-lg-12 col-md-12 col-sm-12 bord">
                  <Tooltip title="ID" placement="left">
                    <h4>{el.id}</h4>
                  </Tooltip>
                  <Tooltip title="Token" placement="left">
                    <h4>{el.token}</h4>
                  </Tooltip>
                  <Tooltip title="Username" placement="left">
                    <h4>{el.username}</h4>
                  </Tooltip>
                </div>
              );
            })
          ) : (
            <h1 className="text-center text-light mt-5 pt-5">There is nothing here yet !</h1>
          )}
        </div>
      </div>
    </Klient>
  );
};

//Styles
const Klient = styled.div`
  background: #363636;
  color: #fff;
  height: max-content;
  padding-bottom: 435px;
  .nuvv {
    padding-top: 5px;
    height: 80px;
    background: #363636;
    border-bottom: 2px solid rgba(255, 110, 64, 1);
  }
  .pinal {
    padding-top: 25px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pinal a h5:hover {
    color: rgba(255, 110, 64, 1);
  }
  .bord {
    padding-left: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 40px;
    align-items: center;
    padding-top: 6px;
    border: 1px solid rgba(255, 110, 64, 1);
    h4 {
      cursor: pointer;
    }
  }
  @media all and (max-width: 992px) {
    .bord {
      padding-left: 100px !important;
    }
  }
  @media all and (max-width: 768px) {
    .bord {
      padding-left: 60px !important;
    }
  }
  @media all and (max-width: 500px) {
    .nuvv {
      height: 150px;
      padding-bottom: 0px;
      padding-top: 0;
    }
    .pinal {
      display: block;
      line-height: 90px;
    }
  }
  @media all and (max-width: 393px) {
    .bord {
      padding-left: 10px !important;
    }
  }
`;
export default Client;
