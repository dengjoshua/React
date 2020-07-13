import React, { Component } from 'react'

class Confirm extends Component {
  render() {
    const { nextStep, prevStep, values: { firstName, lastName, email, occupation, bio, city} }= this.props;

    return (
        <React.Fragment>
            <nav className="navbar bg-primary" >
                <p className="text text-light m-0 ml-5">Confirm User Data</p>
            </nav>
                <ul>
                    <li className="text text-primary">First Name:<br/><span className="text text-success">{firstName}</span></li>
                    <li className="text text-primary">Last Name:<br /><span className="text text-success">{lastName}</span> </li>
                    <li className="text text-primary">Email:<br /><span className="text text-success">{email}</span></li>
                    <li className="text text-primary">Occupation:<br/><span className="text text-success">{occupation}</span></li>
                    <li className="text text-primary">City:<br/><span className="text text-success">{city}</span> </li>
                    <li className="text text-primary">Bio:<br/><span className="text text-success">{bio}</span> </li>
                </ul>



            <br/>
            <button className="btn btn-primary ml-5"
            onClick={nextStep}      
            >Confirm</button>
            <button className="btn btn-secondary ml-5"
            onClick={prevStep}      
            >Previous</button>
    </React.Fragment>
    )
  }
}

export default Confirm;