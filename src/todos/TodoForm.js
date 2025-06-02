import React, { useState } from 'react'
import {v4 as idRandom} from 'uuid'
function TodoForm({ todos, setTodos }) {
  const [inputTodo, setInputTodo] = useState('')
  const [inputTime, setInputTime] = useState('')
  const [inputDate, setInputDate] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      inputTodo.trim() === '' ||
      inputTime.trim() === '' ||
      inputDate.trim() === ''
    )
      return

    const newTodo = {
      id: idRandom(),
      task: inputTodo,
      time: inputTime,
      date: inputDate,
      isTodo: true,
    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
    setInputTodo('')
    setInputTime('')
    setInputDate('')
  }
  return (
    <div className="todo_form">
      <form onSubmit={handleSubmit}>
        <div className="todo_form_inputs">
          <input
            style={{ textAlign: 'center' }}
            className="todo_input"
            placeholder="task"
            type="text"
            maxLength={11}
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
          ></input>
          <input
            className="todo_input"
            type="time"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
          ></input>
          <input
            className="todo_input"
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          ></input>
          <button className="todo_btn" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default TodoForm
