import React from 'react'

const EachTodo = (props) => {

  const handleTodoClick = () =>{
    props.toggleChecked(props.todo.id);
  }
  return (
    <div>
      <input type="checkbox" checked={props.todo.checked} onChange={handleTodoClick} />
      <label>{props.todo.name}</label>
    </div>
  )
}

export default EachTodo