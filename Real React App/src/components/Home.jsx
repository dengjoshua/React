import React, { Component } from 'react'
import Menu from './Menu'
import  { 
  BrowserRouter as Router,
  Switch,
 Route,
}
 from 'react-router-dom'
import About from './About'
import SignUp from './Sign Up';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Menu />
          
              <Switch>
                    <Route exact path="/" >
                        Home Page
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>
              </Switch>
          </Router>
      </div>
    )
  }
}

export default Home;