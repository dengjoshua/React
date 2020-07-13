import React, { Component } from 'react'
import img from './img/speaker1.jpg'

class Product extends Component {
    state = {
        step:1,
        title: 'Speakers',
        size: '16px, 20px',
        sound: '22Hz',
        price:'UGx 2,030,000',
        weight:'220 kgs',
        number: '15'       
  }

  render() {
    return (
      <div className="app">
          <h1>{this.state.title}</h1>
          <img src={img} alt="Speaker"/>
          <p>Size: {this.state.size}</p><br/>
          <p>weight: {this.state.weight}</p><br/>
          <p>Price: {this.state.price}</p><br/>
          <p>Sound: {this.state.sound}</p><br/>
          <p>Stock: {this.state.number}</p><br/>
          <button className="btn btn-outline-primary"
          onClick={this.props.prevStep}          
          >Back to praducts</button>
          <button className="btn btn-outline-warning m-2"
          onClick={this.props.handleDetials}          
          >Buy</button>
      </div>
    )
  }
}

export default Product;