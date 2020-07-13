import React, { Component } from 'react'

class Bedsheets extends Component {
    state = {

        step: 1,  
        title: "Bedsheets",
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
              <h5 className="text text-primary">{cotton}</h5>
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

export default Bedsheets;
