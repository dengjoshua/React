import React, { Component } from 'react'
import './App.css'





// eslint-disable-next-line
class App extends Component {
    state = {
   products: [
{
  id:1,
  title:'Iphone 11 Max',
  resolution:'16px',
  screen:'620px, 320px',
  OS:'V10.1.0',
  color:'Grey',

},

{
 id:2,
 title:'Iphone 10 X',
  resolution:'16px',
  screen:'420px, 280px',
  OS:'V9.3.2',
  color:'Black',

},
{
  id:3,
  title:'Iphone 8 mini',
  resolution:'16px',
  screen:'320px,  220px',
  OS:'V8.8.0',
  color:'Lime',

},
{
    id:4,
    title:'Imac ProBook Max',
    resolution:'22px',
    screen:'2220px, 1120px',
    OS:'V2.1.1',
    color:'Grey',

},

{
   id:5,
   title:'Imac ProBook lite',
    resolution:'20px',
    screen:'1620px, 880px',
    OS:'V2.0.0',
    color:'Black',

},
{
    id:6,
    title:'Imac ProBook mini',
    resolution:'18px',
    screen:'1320px,  620px',
    OS:'V1.8.9',
    color:'Grey',

},
]
}

viewDetials = (id) => {
    console.log(id)
}

menu = () =>{
  document.querySelector('.deng').classList.toggle('menu');
}

render() { 
          return (
    <div className="bg-primary w-100" >
   
      <button className="menu-btn ml-auto" onClick={this.menu}  >Menu</button>
      <div className="deng" >
     <ul>
       <li>Windows</li>
       <li>Windows</li>
       <li>Windows</li>
       <li>Windows</li>
       <li>Windows</li>
       <li>Windows</li>
    </ul>
      </div>

      <div className="products ">
      <ul>
      <li>
          {
            this.state.products.map(product => (
              <product
              product={product}
              />
            ))
          }
      </li>
      </ul>
      </div>
    </div>
)
}
}
export default App;
