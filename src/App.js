import React, {useState, useRef, useEffect} from "react"
import './App.css';
import  TodoList from './Components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([])
  const todoName = useRef()

  function handleAddTodos(){
    //console.log(todoName.current.value)
    const todo = todoName.current.value.trim();
    if(todo === ''){
      alert("Enter some todo")
      return;
    }
    const newTodo = {
      id:uuidv4(),
      name:todo,
      checked:false
    }
    setTodos(prev => {
      return [...prev, newTodo]
    })
    todoName.current.value='';
  }

  const toggleChecked = id =>{
    const alltodos = todos.map(todo => {
      if(todo.id === id){
        todo.checked = !todo.checked
      }
      return todo;
    })    
    setTodos(alltodos);

  }

  const handleClearCompleted = () =>{
    const remTodos = todos.filter(todo => !todo.checked)
    setTodos(remTodos)
  }
  const handleClearAll = () =>{
    setTodos([])
  }


  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos)setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  

  return (
    <div className="App">
      <label>
        <input ref={todoName} placeholder='Enter Your Todo'/>
        <button onClick={handleAddTodos}>Add Todo</button>
        <button onClick = {handleClearCompleted}>Clear Completed</button>
        <button onClick={handleClearAll}>Clear All</button>
      </label>
      <div>
        {todos.filter(todo  => !todo.checked).length}
        <span>Todos Left</span>
      </div>
      <TodoList todos={todos} toggleChecked={toggleChecked}/>
    </div>
  );
}

export default App;
