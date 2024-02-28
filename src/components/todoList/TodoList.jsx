import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'
import './TodoList.css'
const TodoList = ({todoData,delTodo,warningTodo,doneTodo,text,edittext}) => {
  
    const elementy=todoData.filter(el=>el.word.includes(text)||el.word.toLowerCase().includes(text)||el.word.toUpperCase().includes(text)).map(el=>{
        return(
            
            <li className='list-group-item' key={el.id}>
                
                <TodoListItem edittext={edittext} text={text} word={el.word} doneTodo={doneTodo} done={el.done} warningTodo={warningTodo} imp={el.important} id={el.id} delTodo={delTodo} title={el.word} />
            </li>
        )
        
    })
    let notodo=''
    if (todoData.length==0) {
        notodo='No todo'
    }
    return (
        <ul className='list-group'>
           
            {elementy}
            <span className='nospan'>{notodo}</span>
            
        </ul>
    )
}

export default TodoList
