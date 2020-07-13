import React, { Component } from 'react'
import img1  from './img/play.png'
import img2  from './img/store.png'
import img3  from './img/subway.png'

class Cushons extends Component {
  state = {

  step: 1,  
  title: "Cushons",
  cushons: [
{
       title:"Thread Material Designs",
       cotton:'Cotton Types',
       silk:'Silk Types',
       nylon:'Nylon Types'
}
]
}

//proceed to next step
nextStep = () =>{
    const { step } =this.state;
    this.setState({
        step: step + 1
    })
}

//Go back to previous step
prevStep = () =>{
    const { step } =this.state;
    this.setState({
        step: step - 1
})
}


  render() {
   const { step } = this.state;
   const { title, cotton, silk, nylon} = this.state;
   
switch(step) {
   case 1:
   return (
   <div>
   <h3>{title}</h3>
   <div className="item" >
   <h5 className="text text-primary">{cotton}</h5>
   <img src={img1} alt=""/>
   <p className="text text-secondary" >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Accusamus exercitationem illum temporibus
    inventore consequuntur! Aperiam aut repudiandae</p>
    <button className="btn btn-outline-primary m-2"
    onClick={this.nextStep}    
    >View Detials</button>
    <button className="btn btn-outline-success m-2">Main menu</button>
    </div>
    </div>
)
    case 2:
    return (
        <div>
        <h3>Cotton Types </h3>
        <div className="item" >
        <h5 className="text text-primary">{silk}</h5>
        <img src={img2} alt=""/>
        <p className="text text-secondary" >
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Accusamus exercitationem illum temporibus
         inventore consequuntur! Aperiam aut repudiandae</p>
         <button className="btn btn-outline-warning m-2"
         onClick={this.nextStep}    
         >Order</button>
         <button className="btn btn-outline-success m-2"
         onClick={this.prevStep}  
         >Back</button>
         </div>
         </div>
)
    case 3:
    return (
        <div>
        <h3>Order Design</h3>
        <div className="item" >
        <img src={img3} alt="" className="d-block rounded"/>
        <input type="text" className="form-control" id=""/>
         <button className="btn btn-outline-warning m-2"
         onClick={this.nextStep}    
         >Order</button>
         <button className="btn btn-outline-success m-2"
         onClick={this.prevStep}  
         >Back</button>
         </div>
         </div>
)
}
}
}

export default Cushons;