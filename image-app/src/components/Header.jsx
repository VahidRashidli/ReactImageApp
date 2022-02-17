import React from 'react'
import styled from 'styled-components'
function Header() {
  const StyledHeader=styled.div`
  padding:20px;
  text-align:center;
  background-color:#707070;
  color:white;
  `;
  return (
    <StyledHeader><h1>Welcome to the Image App</h1></StyledHeader>
  )
}

export default Header