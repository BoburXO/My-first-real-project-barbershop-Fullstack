import React from 'react';
import styled from 'styled-components';
import pageNot from '../images/404Page.gif';

const ErrorPage = () => {
  //JSX
  return (
    <Err>
        <header className='errHeader'>
            <div className="errbox">
              <img src={pageNot} alt="404" />
              
            </div>
        </header>
    </Err>
  )
}
//Styles
const Err = styled.div`
  .errHeader {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .errbox{
    margin: auto;
    h1{
      font-weight: bold;
    }
  }
`
export default ErrorPage