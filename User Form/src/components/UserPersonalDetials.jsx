import React, { Component } from 'react'


class UserPersonalDetials extends Component {


  render() {
    const { handleChange, values, nextStep, prevStep } = this.props;
    
    return (
      <React.Fragment>
      <nav className="navbar bg-primary" >
        <p className="text text-light m-0 ml-5">Enter Your Personal Detials</p>
      </nav>
            City: <br/>
            <input type="text"className="form-control mt-2"
            placeholder="Enter your city"
            value={values.city}
            onChange={handleChange('city')}
            /> <br/>
            Occupation: <br/>
            <input type="text"className="form-control mt-2"
            placeholder="Enter your occupation"
            value={values.occupation}
            onChange={handleChange('occupation')}
            /> <br/>
            Bio <br/>
            <input type="text"className="form-control mt-2"
            placeholder="Enter your Bio"
            value={values.bio}
            onChange={handleChange('bio')}
            /> <br/>
            <button className="btn btn-primary ml-5"
            onClick={nextStep}      
            >Continue</button>
            <button className="btn btn-secondary ml-5"
            onClick={prevStep}      
            >Previous</button>
      </React.Fragment>
    )
  }
}

export default UserPersonalDetials;