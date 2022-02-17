import React from 'react'
import styled from "styled-components"
function CardBody() {
  const StyledCardBody=styled.div`
  border:1px red dashed;
  padding:10px;
  width:60%;
  `;
  return (
    <div className='d-flex justify-content-center'>
    <StyledCardBody>
      <div className='description'>
        <p className='text-primary'>Hello, this is the best description!</p>
      </div>
    <div className='w-100 d-flex justify-content-center'>
    <img className='w-25 d-block' 
    src="pic.jpg" alt="Picture of nature"/></div>
    </StyledCardBody>
    </div>
  )
}

export default CardBody