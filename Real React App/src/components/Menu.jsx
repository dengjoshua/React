import React, { useState } from 'react';
import { Link } from 'react-router-dom'




function Menu() {
  const [ showMenu, setShowMenu ] = useState(false)
 let menu 
 if(!showMenu){
     menu = 
     <div className="back" >
          <ul className="main-menu" >              
                  <li><Link to= '/' onClick={() => setShowMenu(false)} >Home</Link></li>              
                  <li><Link to = '/About'  onClick={() => setShowMenu(false)} >About</Link></li>
                  <li onClick={() => setShowMenu(false)} ><Link to = '/SignUp' >Sign Up</Link></li>
          </ul>
      </div>
 }


  return (
      <React.Fragment>
      <div className="nav bg-primary" >
      <svg xmlns="http://www.w3.org/2000/svg" className="menu-btn" onClick={() => setShowMenu(!showMenu)} viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
      </div>
      <div className="menu">{ menu }</div>
      <div className="main">
                
      </div>
      </React.Fragment>
    
  );
}
export default Menu;

