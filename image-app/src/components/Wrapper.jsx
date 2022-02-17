import React from 'react'
import Button from './Button'
import Card from './Card/Card'
import styled from 'styled-components'
function Wrapper(props) {
  const btn=document.createElement("button");
  btn.textContent="Toogle"
  const {ToggleCard}=props
  
  btn.classList.add("invisible")
  return (
    <div className='text-center mt-3'>
    <Button BtnHandler={props.BtnHandler} 
     cardToggle={btn}/>
    <Card ToggleCard={ToggleCard} btn={btn}/>
    </div>
  )
}

export default Wrapper