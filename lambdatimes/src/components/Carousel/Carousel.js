import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index : 0,
      mounted : false

    }
  }
  componentDidMount(){
    this.setState({
      images : carouselData,
      mounted : true
    })
  }

  leftClick = () => {
    this.state.index === 0
    ?
      this.setState({
        index : this.state.images.length - 1
      })
    :
    this.setState(prevState => ({
      index : prevState.index - 1
    }));
  }

  rightClick = () => {
    this.state.index === this.state.images.length - 1
    ?
      this.setState({
        index : 0
      })
    :
    this.setState(prevState => ({
      index : prevState.index + 1
    }));

  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.index]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.state.mounted ? this.selectedImage() : <h2>Loading</h2>}
        
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}