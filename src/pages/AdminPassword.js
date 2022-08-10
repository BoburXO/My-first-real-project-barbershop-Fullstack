import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AdminPassword = () => {
  useEffect(() => {
    document.title = "Password | COOL BARBER";
  }, []);

  const navigate = useNavigate();

  const [pass, setPass] = useState("");

  const token = "BoburAdminKoko";
//JSX
  return (
    <Password>
      <header>
        <div className="box pt-4">
          <input
            id="inp"
            type="password"
            maxLength={8}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="______"
          />
          {pass === "koko" ? (
            <h4 id="correct" className="text-light text-center pt-5">
              Correct password
            </h4>
          ) : (
            <h4 id="incorrect" className="text-light text-center pt-5">
              Password is not written or is incorrect
            </h4>
          )}
          <div className="btn">
            {pass === "koko" ? (
              <button
                 onClick={() => {
                  navigate("/admincoolbarberprivate");
                  localStorage.setItem("token", token);
                }}
              >
                Submit
              </button>
            ) : (
              <button onClick={() => navigate("/admin")}>Submit</button>
            )}
          </div>
        </div>
      </header>
    </Password>
  );
};
//Styles
const Password = styled.div`
  background: #363636;
  height: 100vh;
  padding-bottom: 50px;
  width: 100%;
  header {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  #incorrect {
    color: #fff !important;
    font-weight: bold !important;
  }
  #correct {
    color: #fff !important;
  }
  #inp {
    color: #fff;
  }
  #inp {
    border-bottom: rgba(255, 110, 64, 1) 2px solid;
  }
  .box {
    text-align: center;
  }
  h4 {
    font-weight: bold !important;
  }
  #inp {
    padding-left: 50px;
    background: none;
    width: 140px;
    height: 40px;
    color: #fff;
    font-weight: bold !important;
  }
  form {
    margin: auto;
    padding-top: 50px;
    text-align: center;
  }
  #inp::-webkit-outer-spin-button,
  #inp::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  #inp[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  .btn {
    float: right;
  }
  .btn button {
    width: 90px;
    border-radius: 7px;
    height: 40px;
    background: rgba(255, 110, 64, 1);
    color: #fff;
    font-weight: bold !important;
  }
  .btn button:active {
    background: #363636;
    border: 1px solid rgba(255, 110, 64, 1);
  }
  .box {
    margin: auto;
    width: 550px;
    height: 200px;
    border-radius: 7px;
    background: #363636;
    border: 2px rgba(255, 110, 64, 1) solid;
  }
`;
export default AdminPassword;
