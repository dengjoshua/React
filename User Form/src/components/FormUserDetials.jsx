import React, { Component } from 'react'
import { Checkbox } from '@material-ui/core'


class FormUserDetials extends Component {

  render() {
    const { handleChange, nextStep, values } = this.props;
    
    return (
      <React.Fragment>
      <nav className="navbar bg-primary" >
        <p className="text text-light m-0 ml-5">Enter Your User Detials</p>
      </nav>
            First Name: <br/>
            <input type="text" className="form-control mt-2"
            placeholder="Enter First Name"
            onChange={handleChange('firstName')}
            value = {values.firstName}
            /> <br/>
            Last Name: <br/>
            <input type="text"className="form-control mt-2"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={handleChange('lastName')}
            /> <br/>
            Email: <br/>
            <input type="text"className="form-control mt-2"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange('email')}
            /> <br/>
            <Checkbox /> I am Above 18 ! <br/>
            <button className="btn btn-primary ml-5"
            onClick={nextStep}      
            >Continue</button>
      </React.Fragment>
    )
  }
}

export default FormUserDetials;