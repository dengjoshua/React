import React, { Component } from 'react'
import img from './img/speaker1.jpg'

class Home extends Component {
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
        <p>Sound: {this.state.sound}</p>
        <button className="btn btn-outline-primary"
        onClick={this.props.handleDetials}
        >View Detials</button>
    </div>
    )
  }
}

export default Home;