import React, { Component } from 'react'



class Requests extends Component {
 state={
  requests:[
    {
      id:1,
      name:'John Wick',
      status:'friendly' 
    },
    {
      id:2,
      name:'Edward Swonden',
      status:'Anti social social club'
    },
    {
      id:3,
      name:'Mr Bean',
      status:'Too friendly' 
    },
    {
      id:4,
      name:'qug MAya',
      status:'Social Addict' 
    },
    {
      id:5,
      name:'John Contatin',
      status:'Vicous and deadly' 
    },
  ]
 }
addFriend = (id) =>{
  this.setState({requests: this.state.requests.filter(request => request.id === id )   })
} 

Delete = (id) =>{
  this.setState({requests: this.state.requests.filter(request => request.id !== id )   })
} 




  render() {
  const  {requests} = this.state;
    return (
      <div className="absolute-wrapper">
     <div className="container bg-primary " >
        <h1>Requests</h1>
     <div>
       {
         requests.map((request) => {
      return(
        <div key={request.id} id={request.id}  className="mt-2"  >
            <h3>{request.name}</h3>
            <p>{request.status}</p>
           <button className="btn btn-success m-2" onClick={this.addFriend.bind(this, request.id)} >Confirm</button>
            <button className="btn btn-danger m-2" onClick={this.Delete.bind(this, request.id)} >Delete</button>
        </div>
      
      )
      })
      }
     </div>
     </div>
     </div>
    )
  }
}

export default Requests
