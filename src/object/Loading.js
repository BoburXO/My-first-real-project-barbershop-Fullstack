import React from 'react';
import loading from '../images/loading.gif';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Load>
      <div className="box">
      <img src={loading} alt="gif" />
        </div>           
    </Load>
  )
}
const Load = styled.div`
display: flex;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: #ECF0F1;
.box{
  margin:  auto;
}
`
export default Loading;