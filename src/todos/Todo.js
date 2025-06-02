import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import DeleteTodoBtn from './DeleteAllTodoBtn'
import './todos.css'
function Todo() {
  const [todos, setTodos] = useState([])
  
  return (
    <div className='todo' style={{ marginTop: '15%'}}>
      <h1>Todo</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <DeleteTodoBtn todos= {todos} setTodos={setTodos}/>
      <TodoList todoItems={todos} setTodoItems={setTodos}  />
    </div>
  )
}
export default Todo;
