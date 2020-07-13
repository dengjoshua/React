import React  from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Home'
import Footer from './components/Footer'
import { Switch, Route, useLocation } from 'react-router-dom'
import Menu from './components/Menu'
import Friends from './components/Friends'
import Notifications from './components/Notifications'
import Requests  from './components/Requests'
import { useTransition, animated } from 'react-spring'


function App () {

const location   = useLocation()
const transitions = useTransition(location, location => location.pathname,  {
  from:{ opacity: 0, transform: "translate(320px, 0)", overflow:'hidden'},
  enter:{ opacity: 1, transform: "translate(0%, 0)", overflow:'hidden' },
  leave:{ opacity: 0, transform: "translate(-160px, 0)", overflow:'hidden' }
})

    return (
      <div className="container"> 
      <Header />
      {transitions.map(({ item, key, props })=> (
    <animated.div key={key} style={props} >
        <Switch location={item}>
          <Route exact path="/" component={Body}  />
          <Route path="/Menu" component={Menu}  />
          <Route path="/Friends" component={Friends} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/Requests" component={Requests} />
        </Switch>
    </animated.div>
  ))}
      <Footer />
      </div>
     );
  
    }
 
export default App;






