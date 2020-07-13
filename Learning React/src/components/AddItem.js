import React, { Component } from 'react'


class AddItem extends Component {
    state = { 
        title:''
     }

 onChange = (e) => this.setState({[e.target.name]: e.target.value})
 
addItem = (e) =>{
    e.preventDefault();
    this.props.addItem(this.state.title)
    this.setState({title: ''})
}
    
    
    render() { 
        return ( 
            <div>
            <div className="add-section">
                <h1>My Todo-list</h1>
            </div>
            <div className="cont">
                <form style={ {display: 'flex', padding:'5px' }} >
                    <input 
                    className="input" 
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    style={{ flex: '10' }}
                    value={this.state.title}
                    />
                    <button type="submit"
                     className="sub btn btn-success"
                     onClick={this.addItem}
                     style={{ flex:'1' }}
                     >Add </button>
                </form>  
                
            </div>
            </div>
         );
}
}

export default AddItem; 