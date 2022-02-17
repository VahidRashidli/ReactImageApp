import React, { Component } from 'react'
import CardHead from './CardHead';
import CardBody from './CardBody';
import Parser from 'html-react-parser'
export default class Card extends Component {
  constructor(){
    super();
    this.state={
      isVisible:false
    }
  }
  render() {
    const {btn}=this.props
    const {ToggleCard}=this.props
    btn.addEventListener("click",()=>{
      ToggleCard(this)
    })  
    const el=document.createElement("div");
    el.innerHTML+=btn.outerHTML
    return (
      <>
        <div className="content">
        <div>{Parser(el.outerHTML)}</div>
        {this.state.isVisible?
        <div><CardHead/><CardBody/></div>
        :<h2 className='text-warning'>Click to display the card</h2>}
        </div>
      </>
    )
  }
}
