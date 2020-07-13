import React, { Component } from 'react'
import Todo from './components/Todo'
import './App.css'
import PropTypes from 'prop-types'
import AddItem from './components/AddItem'

class App extends Component {
    state = {
        todos: [
           {
               id:1,
               title:'Learn React using VScode',
               completed: false
            },
            {
                id:2,
                title:'Write the code for todo-list',
                completed: false
             },
             {
                id:3,
                title:'Debug the code of the App',
                completed: false
             },
             {
                id:4,
                title:'Test the Beta using Beta',
                completed: false
             },
             {
                id:5,
                title:'Release the documentation',
                completed: false
             },
             {
                id:6,
                title:'Sell of the company',
                completed: false
             }
        ]
     }
handleCheck = id =>{
   this.setState({todos: this.state.todos.map(
       todo =>{
           if(todo.id ===id){
               todo.completed = !todo.completed;
}
return todo;

}
)
} )
}
handleDel = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}
addItem = (title) =>{
    const newTodo={
        id: 6+1,
        title,
        completed:false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
}


    render() {

        return (
            <div className="container">
                <AddItem addItem={this.addItem}/>
                <Todo
                todos={this.state.todos}
                key={this.state.todos.id}

                onCheck={this.handleCheck}
                delTodo={this.handleDel}
                />
            </div>
        )
    }
}
Todo.propTypes  = {
    todos: PropTypes.array.isRequired

}

export default App;
