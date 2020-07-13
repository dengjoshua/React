import React, { Component } from 'react'

class AddItem extends Component {
    state = { 
        title: ''
     }

    getStyle = () =>{
      return{
          width:'80%',
          margin:'auto',
          borderBottom:'1px dotted'
    }
    }
onChange = (e) => this.setState({[e.target.name]: e.target.value})
  
AddItem = (e) =>{
    e.preventDefault();
    this.props.AddItem(this.state.title)
    this.setState({title: ''})

}
    
  render() { 
        return ( 
            <div style={this.getStyle()}>
                <div className='navbar'>
                    <h1>My Todo list</h1>
                </div>
                <form style={{display:'flex'}}>
                 <input type="text" name="title"
                 value={this.state.title} 
                 style={{flex:'10'}}
                 onChange={this.onChange}
                 />
                 <button className="btn btn-success" style={{flex:'1'}}
                 onClick={this.AddItem}
                 >Add</button>    
                </form> 
                </div>
);      
}
}
 
export default AddItem;