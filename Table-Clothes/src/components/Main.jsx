import React, { Component } from 'react'
import Bedsheets  from './bedsheets'
import Cushons from './cushons'
import Table  from './table'




class Main extends Component {
   state = {
    step:1,
       
}

  render() {
  return (
   <div className="app">
   <Cushons />  
   <Bedsheets />
   <Table />
   
   </div>


    
)
}
}

export default Main;
