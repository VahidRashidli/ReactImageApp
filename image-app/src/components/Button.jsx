import React, { Component } from 'react'
import styled from "styled-components"
export default class Button extends Component {
    constructor(){
        super();
        this.state={
            isVisible:false
        }
    }
  render() {
    const {BtnHandler}=this.props;
    const StyledButton=styled.button`
    font-size: 20px;
    padding: 10px;
    width:30%;
    border: none;
    border-radius: 3px;
    cursor:pointer;
    background-color:#a0ff9d;
    `;
    const btnText=this.state.isVisible?"Hide":"Show";
    const {cardToggle}=this.props
    return (
    <div>
      <StyledButton onClick={()=>{
        cardToggle.click();
        BtnHandler(this);
      }
      }>{btnText}
      </StyledButton>
      </div>
    )
  }
}
