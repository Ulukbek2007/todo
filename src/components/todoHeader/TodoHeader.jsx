import React, { Component } from 'react'

export default class  extends Component {
  render() {
    
    return (
      <div className='d-flex justify-content-between'>
        <h3>Todo List</h3>
        <h4>
            {this.props.allDone} more todo  {this.props.done} done
        </h4>
      </div>
    )
  }
}
