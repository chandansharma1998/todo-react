import React from 'react'
import EachTodo from './EachTodo'


const TodoList = ({todos,toggleChecked}) => {
  return (
    todos.map(todo=>{
        return <EachTodo key={todo.id} todo={todo} toggleChecked={toggleChecked}/>
    })
  )
}

export default TodoList