import React, { Component } from 'react'
import TodoItem from './TodoItem';



class Todo extends Component {
    state = { 
            
   }
    render() { 
        return this.props.todos.map((todo) =>(
        <TodoItem 
        todo={todo}
        key={todo.id}
        onCheck={this.props.onCheck}
        delTodo={this.props.delTodo}
        />
        ))
    
    }
}
 
export default Todo;