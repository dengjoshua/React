import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddItem from './components/AddItem'
//import {Link} from 'react-router-dom'

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'learn the mern',
        completed: false
      },
      {
        id:2,
        title:'Create own Todo List',
        completed: false
      },
      {
        id:3,
        title:'Finish and debug the app code',
        completed: false
      },
      {
        id:4,
        title:'Show to atem and see what he thinks',
        completed: false
      },
      {
        id:5,
        title:'Add CSS and correct interface to the app',
        completed: false
      }

    ]


}
onCheck = (id) =>{
  this.setState({todos: this.state.todos.map(
  todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed;
}
return todo;
})
})
}

delTodo = id =>{
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}
AddItem = (title) => {
  const newTodo ={
    id:6,
    title,
    completed:false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}
render() {
    return (
      <div className="main">
      <AddItem AddItem={this.AddItem}/>
      <Todos
      todos={this.state.todos}
      onCheck={this.onCheck}
      delTodo={this.delTodo}
      />
      </div>
     );
  }
}

export default App;
