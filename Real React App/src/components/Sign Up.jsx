import React, { Component } from 'react'

class SignUp extends Component {
   state = {
       step:1,
       fisrtName:'',
       lastName:'',
       email:'',
       Address:'',
       creditCard:''
   }
//proceed to next step
nextStep = () =>{
    const { step } = this.state;
    this.setState({
        step: step + 1
    })
}

//Go back to prev step
prevStep = () =>{
    const { step } = this.state;
    this.setState({
        step: step - 1
    })
}

//handle input change
handleChange = input => e =>{
    this.setState({[input]: e.target.value })
}



  render() {
  const {step} = this.state;

    // eslint-disable-next-line default-case
    switch(step){
        case 1:
            return (
                <div className="app">
                    <input type="text" className="form-control"/>
                </div>
            )
    }
  }
}

export default SignUp;
