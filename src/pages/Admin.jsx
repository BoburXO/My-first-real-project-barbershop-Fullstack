import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Admin = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 215,
    bgcolor: "#363636",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
  };

  const [modalData, setModalData] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [form, setForm] = useState("");
  const [imageEdit, setImageEdit] = useState("");
  const [data, setData] = useState([]);

  const notify = () => toast("Barber Deleted.");

  const [open, setOpen] = useState(false);
  
  const handleOpen = (data) => {
    setOpen(true);
    setModalData(data);
    setImageEdit(data.image);
    setForm(data.username);
  };
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    document.title = `Admin Panel | COOL BARBER`;
  }, []);

  const AdminDelete = async (id) => {
    try {
      const res = await axios
        .delete(`http://127.0.0.1:8000/barber/${id}`)
        .then(() => window.location.reload());
      console.log("Data deleted");
    } catch (error) {
      alert(error);
    }
  };

  const editCategory = async (id) => {
    try {
      const res = await axios
        .put(`http://127.0.0.1:8000/barber/${id}/`, {
          username: form,
          image: imageEdit,
        })
        .then(() => window.location.reload());
      console.log("Name edited");
    } catch (error) {
      console.log(error);
    }
  };

  const AdminFunction = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/barber/", {
        username: name,
        image: image,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    setImage("");
    setName("");
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/barber/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  if (!data) {
    return "";
  }
  //JSX
  return (
    <AdminPanel>
      <nav>
        <div className="container">
          <div className="panel">
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
              <h5
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Log Out
                <svg
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
                </svg>
              </h5>
            </a>
          </div>
        </div>
      </nav>
      <header>
        <div className="container">
          <h1 className="text-light text-center pt-5">
            You can change name barbers and they image.
          </h1>
          <div className="over">
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="mx-2"
              type="text"
              placeholder="URL image..."
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name barbers..."
            />
          </div>
          <div className="plus text-center">
            <button
              disabled={!image}
              onClick={AdminFunction}
              className="btn btn-outline-primary mt-3 mx-2"
            >
              Add
            </button>
          </div>
          <div className="row gx-0 maps mt-5 pt-5">
            {data.map((el) => {
              return (
                <div className="hove col-lg-3 col-md-4 col-sm-6 pt-1">
                  <div className="pt-2 foote text-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        style={{ cursor: "pointer", color: "#fff" }}
                        onClick={() => handleOpen(el)}
                        className="m-1 bi bi-pencil-square mt-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                      <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <button
                              style={{
                                background: "none",
                                float: "right",
                                border: "1px solid rgba(255, 110, 64, 1)",
                              }}
                              className="btn btn-primary"
                              onClick={handleClose}
                            >
                              X
                            </button>
                            <input
                              style={{
                                background: "none",
                                borderBottom: "1px solid rgba(255, 110, 64, 1)",
                                color: "#fff",
                              }}
                              type="text"
                              placeholder="Image"
                              value={imageEdit}
                              onChange={(e) => setImageEdit(e.target.value)}
                            />
                            <input
                              style={{
                                borderBottom: "1px solid rgba(255, 110, 64, 1)",
                                background: "none",
                                color: "#fff",
                              }}
                              className="kalko mt-2"
                              placeholder="Name"
                              type="text"
                              value={form}
                              onChange={(e) => setForm(e.target.value)}
                            />
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            <button
                              disabled={!form}
                              id="oneplus-2"
                              className="btn mt-2 btn-primary"
                              style={{
                                background: "rgba(255, 110, 64, 1)",
                                color: "#fff",
                                border: "none",
                                float: "right",
                              }}
                              onClick={() => editCategory(modalData?.id)}
                            >
                              Edit
                            </button>
                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                    <LazyLoadImage
                      className="mt-0"
                      src={el.image}
                      alt=""
                      effect="blur"
                    />
                    <Tooltip title="Barber ID" placement="top">
                      <h5
                        style={{ cursor: "pointer" }}
                        className="text-light pt-2"
                      >
                        {el.id}
                      </h5>
                    </Tooltip>
                    <h3 className="pt-2 text-light">{el.username}</h3>
                  </div>
                  <div className="btns text-center">
                    <button
                      onClick={() => {
                        AdminDelete(el.id);
                        notify();
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                    <ToastContainer
                      position="bottom-left"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </AdminPanel>
  );
};
//Styles
const AdminPanel = styled.div`
  background: #363636;
  height: max-content !important;
  padding-bottom: 350px;
  nav {
    padding-top: 5px;
    height: 80px;
    background: #363636;
    border-bottom: 2px solid rgba(255, 110, 64, 1);
  }
  .maps img {
    width: 200px;
    height: 200px;
  }
  .MuiTooltip-popper {
    width: 70px;
    height: 30px;
  }
  .panel {
    padding-top: 25px;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }
  .panel a h5:hover {
    color: rgba(255, 110, 64, 1);
  }
  .Toastify__toast-theme--light {
    background: #363636;
    color: #fff;
    svg {
      color: #fff;
    }
  }
  .over {
    text-align: center;
    margin-top: 30px;
  }
  .hove {
    border: 1px solid rgba(255, 110, 64, 1);
    height: 400px;
  }
  .over input {
    color: #fff;
    font-size: 17px;
    width: 300px;
    height: 50px;
    background: none;
    border: rgba(255, 110, 64, 1) 2px solid;
    padding-left: 10px;
  }
  .btn {
    background: none;
    border: rgba(255, 110, 64, 1) 1px solid;
    color: #fff;
    font-size: large;
    width: 100px;
  }
  .btn:active {
    background: rgba(255, 110, 64, 1);
  }
  @media all and (max-width: 500px) {
    nav {
      height: 150px;
      padding-bottom: 0px;
      padding-top: 0;
    }
    .panel {
      display: block;
      line-height: 90px;
    }
  }
  @media all and (max-width: 450px) {
    .over input {
      width: 350px;
    }
  }
  @media all and (max-width: 393px) {
    .over input {
      width: 250px;
    }
  }
`;
export default Admin;
