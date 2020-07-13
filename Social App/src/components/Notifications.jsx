import React, { Component } from 'react'

class Notifications extends Component {
   state = {
     notifications:[
     {
       id: 1,
       value:'Its Bob birthday today'
    },
    {
      id: 2,
      value:'Its Bob birthday today'
   },
   {
    id: 3,
    value:'Its Bob birthday today'
 },
 {
  id: 4,
  value:'Its Bob birthday today'
},
{
  id: 5,
  value:'Its Bob birthday today'
},{
  id: 6,
  value:'Its Bob birthday today'
}


] 
}



  render() {
    return (
      <div className="absolute-wrapper">
            {
             this.state.notifications.map(notification => 
                <div key={notification.id} >
                 <p>{notification.value}</p>
                </div>
            )
            }
            <h1>Deng Joshua Aguer</h1>
      </div>
    )
  }
}

export default Notifications;