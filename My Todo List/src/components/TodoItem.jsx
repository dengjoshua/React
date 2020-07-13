import React, { Component } from 'react'




class TodoItem extends Component {

getStyle = () => {
        return {
            background:'#f2f2f2',
            lineHeight:'1.4',
            margin:' auto',
            width:'80%',
            padding:'10px',
            borderBottom:'1px dotted black',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
}
}
    render() {
        const {id, title,} =this.props.todo
        return (

                <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.props.onCheck.bind(this, id)}/>
                    <span>{title}</span>
                    <button className="btn btn-danger m-2"
                    style={btnStyle}
                    onClick={this.props.delTodo.bind(this, id)}
                    >x</button>
                </p>
                </div>
    );
    }
}
const btnStyle = {
        borderRadius:'50%',
        background:'red',
        padding:'5px 10px',
        float:'right',
        color:'#fff',
        marginBottom:'5px'
}


export default TodoItem;
