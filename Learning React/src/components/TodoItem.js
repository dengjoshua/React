 import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '@material-ui/core'


class TodoItem extends Component {
    state = { 
        
     }
     getStyle = () =>  {
         return{
        background:'#f4f4f4',
        borderBottom: '1px #ccc dotted',
        padding: '10px',
        textDecoration: this.props.todo.completed ?
        'line-through':'none'
    }
}
 styleBtn  = () => {
     return{
    background:'red',
    color:'#fff',
    borderRadius:'50%',
    padding:'5px 10px',
    float:'right'

}
}

     render() { 
        const { title, id } = this.props.todo
        return ( 
        <div className="todo" style={this.getStyle()}>
            <p> 
                <Checkbox />
                <input type = "checkbox" onChange={this.props.onCheck.bind(this, id)} />{'  '}
                { title }
                <button style={this.styleBtn()} onClick={this.props.delTodo.bind(this, id)}
                 className="btn btn-danger">x</button>
            </p>
        </div>
         );
    }
}



TodoItem.propTypes  = {
    todo: PropTypes.object.isRequired

}
 
export default TodoItem;