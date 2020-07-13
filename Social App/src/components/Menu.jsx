/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
        <div className="container">
        <ul className="menu">
          <li><a href="#friends">My freinds</a> </li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Chats</a></li>
          <li><a href="#">Language</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
        </div>
    )
  }
}

export default Menu
