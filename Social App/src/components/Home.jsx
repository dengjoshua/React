import React, { Component } from 'react'
import img from './img/real.jpeg' 



class Home extends Component {
    state = {  }
    render() { 
        
        return ( 
    <div className="absolute-wrapper">
            <div>
                    <h1>Hello {this.props.name}</h1>
                <div id="frineds">
                    <img src={img} alt="" className="rounded-circle mx-auto d-block" style={{height:'200px',width:'200px',alignItems:'center' }} /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad praesentium vero porro sapiente ea, natus inventore quos voluptate optio ipsum cum odit cupiditate velit, quae assumenda voluptatem maxime veritatis! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad praesentium vero porro sapiente ea, natus inventore quos voluptate optio ipsum cum odit cupiditate velit, quae assumenda voluptatem maxime veritatis! 
                </div>
            </div>
    </div>
    );
}
}
 
export default Home;