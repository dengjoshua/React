import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/body'
import Footer from './components/Footer'


class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="container"> 
        <Header />
        <Body name="Josh"/>
        <Footer />
      </div>
     );
  }
}
 
export default App;


// const [items, set] = useState([...])
// const transitions = useTransition(items, item => item.key, {
// from: { transform: 'translate3d(0,-40px,0)' },
// enter: { transform: 'translate3d(0,0px,0)' },
// leave: { transform: 'translate3d(0,-40px,0)' },
// })
// return transitions.map(({ item, props, key }) =>
// <animated.div key={key} style={props}>{item.text}</animated.div>
// )

// const [toggle, set] = useState(false)
// const transitions = useTransition(toggle, null, {
// from: { position: 'absolute', opacity: 0 },
// enter: { opacity: 1 },
// leave: { opacity: 0 },
// })
// return transitions.map(({ item, key, props }) => 
// item
//   ? <animated.div style={props}>😄</animated.div>
//   : <animated.div style={props}>🤪</animated.div>
// )
// const location = useLocation()
// const transitions = useTransition(location, location => location.pathname, { ... })
// return transitions.map(({ item, props, key }) => (
//   <animated.div key={key} style={props}>
//     <Switch location={item}>
//       <Route path="/a" component={A} />
//       <Route path="/b" component={B} />
//       <Route path="/c" component={C} />
//     </Switch>
//   </animated.div>
// ))






