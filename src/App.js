import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      todos: [
        {
          id: 1,
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

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
