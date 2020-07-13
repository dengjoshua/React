import React, { Component } from 'react'


class Friends extends Component {
  state= {
    friends:[
      {
        id:1,
        name:'John Doe',
        mutual:21
      },
      {
        id:2,
        name:'John Doe',
        mutual:21
      },
      {
        id:3,
        name:'John Doe',
        mutual:21
      },
      {
        id:4,
        name:'John Doe',
        mutual:21
      },
    ]
  }



  render() {
    const { friends } = this.state;

    return (
      <div className="absolute-wrapper">
      <div className="container"  >
          <h1>Friends</h1>
            <div>
                {
                friends.map(friend => (
                <div key={friend.id}   >
                    <h1>{friend.name}</h1>
                    <p>{friend.mutual}</p>
                </div>
                ))
                }
            </div>
      </div>
      </div>
    )
  }
}

export default Friends
