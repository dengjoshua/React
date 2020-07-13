import React, { Component } from 'react'
import TodoItem from './TodoItem';

class Todos extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="conatiner">{
            this.props.todos.map((todo) =>(
            <TodoItem  
            todo={todo}
            onCheck={this.props.onCheck}
            key={todo.id}
            delTodo={this.props.delTodo}
            />
            
            ))
    }
            </div>
            );
    }
}
 
export default Todos;