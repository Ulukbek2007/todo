import React, { Component } from 'react'


export default class TodoSearch extends Component {

state={
  btns:[
    {name:'all',title:'All'},
    {name:'active',title:'Active'},
    {name:'done',title:'Done'}
  ]
}


  render() {

    const buttons=this.state.btns.map(el=>{
      const active=this.props.filter===el.name
      const clazz=active ? 'btn-info' : 'btn-outline-secondary'
      return(
      <button key={el.title} onClick={()=>this.props.onSetFilter(el.name)} className={`btn ${clazz}`}>{el.title}</button>
      )
      
    })  
    return (
      <div className='d-flex'>
        
         <input 
        type="text" 
        value={this.props.text}
        onChange={this.props.search}
        placeholder='search todo' 
        className='form-control'
        />
        {buttons}
      </div>
    )
  }
}
