import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'
import './App.css';
import uuid from 'uuid'; //uuid used to generate random id. (yarn add uuid) to install
import About from './components/pages/About';

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      todos: [
        {
          id: uuid.v4(),
          task: "take out the trash",
          completed: false,
        },
        {
          id: 2,
          task: "code an application",
          completed: true,
        },
        {
          id: 3,
          task: "sleep in til 12",
          completed: false,
        }
      ]
    }
  }

  // Toggle Complete
  markComplete = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  // Delete Item
  deleteItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    //using the spread operater to copy and then filter the todos. 
    //for each todo item, retrun the todo id that is not equal to the id that was passed in/clicked.
  }

  // Add Todo
  addTodo = (task) => {
    const newTodo = {
      id: uuid.v4(),
      task: task,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodos addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>

    );
  }
}

export default App;
