import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      callApi:this.ToggleCard
    };
  }
   BtnHandler(object) {
    object.setState({isVisible:!object.state.isVisible})
  }
  ToggleCard(object){
    console.log(object);
    object.setState({isVisible:!object.state.isVisible});
  }
  render(){
  return (<>
    <Header/>
    <Wrapper ToggleCard={this.ToggleCard}  BtnHandler={this.BtnHandler}/>
  </>);
}
}


