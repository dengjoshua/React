/* eslint-disable default-case */
import React, { Component } from 'react'
import FormUserDetials from './FormUserDetials'
import UserPersonalDetials from './UserPersonalDetials';
import Confirm from './Confirm'


class UserForm extends Component {
  state = {
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:'',  
}


//procced to the next step
nextStep = () =>{
     const {step} =this.state
     this.setState({
       step: step + 1
     })
}

//Go back to previuos step
prevStep = () =>{
  const {step} =this.state
  this.setState({
    step: step - 1
  })
}

//handling input by user
handleChange = input => e =>{
   this.setState({
     [input]: e.target.value
   })
}

 render() { 
   const { step } = this.state;
   const { firstName, lastName, email, city, occupation, bio } = this.state;
   const { values } = { firstName, lastName, email, city, occupation, bio }
   
   
         switch(step) {

          case 1:
            return (
              <FormUserDetials 
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
              />
            );
          case 2:
            return (
              <UserPersonalDetials 
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
              prevStep={this.prevStep}
              />
        );
            case 3:
              return (
                <Confirm
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                values={values}
                prevStep={this.prevStep}
              />
        );

}

}
}
export default UserForm