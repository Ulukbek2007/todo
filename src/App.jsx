import TodoHeader from './components/todoHeader/TodoHeader'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import Todoadd from './components/todoAdd/TodoAdd'

import '../src/App.css'
import React, { Component } from 'react'


export default class App extends Component {
  state = {
    todoData: [
      { id: 1, word: 'Learn React', important: false, done: false },
      { id: 2, word: 'Learn Js', important: false, done: false },
      { id: 3, word: 'Learn Redux', important: false, done: false }
    ],
    filter: 'all', //active done,
    text: '',
    edittext: '',
  }
  onSetFilter = (status) => {
    this.setState({ filter: status })
  }
  filter = (array, status) => {
    switch (status) {
      case 'all':
        return array
      case 'active':
        return array.filter(el => !el.done)
      case 'done':
        return array.filter(el => el.done)
      default:
        return array
    }
  }
  delTodo = (id) => {
    const delTodos = this.state.todoData.filter(el => el.id !== id)
    this.setState({ todoData: delTodos })
  }

  warningTodo = (id) => {
    const index = this.state.todoData.findIndex(el => el.id === id)
    const todo = this.state.todoData[index]
    const updTodo = { ...todo, important: !todo.important }
    const before = this.state.todoData.slice(0, index)
    const after = this.state.todoData.slice(index + 1)
    this.setState({ todoData: [...before, updTodo, ...after] })
  }
  doneTodo = (id) => {
    const index = this.state.todoData.findIndex(el => el.id === id)
    const todo = this.state.todoData[index]
    const updTodo = { ...todo, done: !todo.done }
    const before = this.state.todoData.slice(0, index)
    const after = this.state.todoData.slice(index + 1)
    this.setState({ todoData: [...before, updTodo, ...after] })
  }

  edTodo = (newdata) => {
   
    this.setState({ edittext: newdata })
  }
  todoAdd = (text) => {
    if (text.trim()) {
      const ids = this.state.todoData.map(el => el.id)
      const newTodo = { word: text, important: false, done: false, id: ids.at(-1) + 1 || 1 }
      this.setState({ todoData: [...this.state.todoData, newTodo||this.edTodo] })
    }
  }
  search = (e) => {
    this.setState({ text: e.target.value })
  }
edittext=(params)=>{
  this.setState({edittext:params})
}
  render() {
    const done = this.state.todoData.filter(el => el.done).length
    const allDone = this.state.todoData.length - done
    const newData = this.filter(this.state.todoData, this.state.filter)

    return (


      <div style={{ width: 400 }}>
        <TodoHeader allDone={allDone} done={done} />
        <TodoSearch search={this.search} text={this.state.text} todoData={this.state.todoData} onSetFilter={this.onSetFilter} filter={this.state.filter} />
        <TodoList edittext={this.edittext} text={this.state.text} doneTodo={this.doneTodo} warningTodo={this.warningTodo} delTodo={this.delTodo} todoData={newData} />
        <Todoadd edittext={this.state.edittext} addTodo={this.todoAdd} />
      </div>
    )

  }
}
