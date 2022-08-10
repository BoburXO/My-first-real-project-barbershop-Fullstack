import React from "react";
import { signInWithGoogle } from "../firebase/config";
import styled from "styled-components";
import google from "../images/google.png";
import signbg from "../images/signbg.png";


const Sign = () => {
  React.useEffect(() => {
    document.title = " Register | COOL BARBER";
  }, []);
//JSX
  return (
    <Signn>
      <div className="box">
        <button
          id="tuch"
          className="btn btn-outline"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign In with Google
          <img src={google} alt="" />
        </button>
      </div>
    </Signn>
  );
};
//Styles
const Signn = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.452) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${signbg}) no-repeat center center/cover;
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  .box {
    margin: auto;
  }
  #tuch img {
    width: 30px;
    height: 30px;
    margin-left:3px;
  }
  .Toastify__toast-theme--light{
    background: #363636;
    color: #fff;
    svg{
      color: #fff;
    }
  }
  #tuch {
    text-decoration: underline;
    width: 270px;
    height: 50px;
    background: #fff;
    border-radius: 40px;
    font-weight: 400;
    font-size: 20px;
  }
`;
export default Sign;
