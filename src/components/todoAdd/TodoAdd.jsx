import React, { Component } from 'react'
import './TodoAdd.css'
export default class Todoadd extends Component {
  state = {
    text: ''
  }

  setText = (e) => {
    this.setState({ text: e.target.value})
    
  }

  render() {



    return (
      <div className='d-flex justify-content-between'>
        <input
          type="text"
          placeholder='add todo'
          className={`form-control `}
          value={this.state.text}
          onChange={(e)=>{this.setText(e)}}
        />
        
        <button
          className='btn btn-info'
          type='button'
          onClick={() => this.props.addTodo(this.state.text, this.state.text = '')}
        >add</button>
      </div>
    )
  }
}
