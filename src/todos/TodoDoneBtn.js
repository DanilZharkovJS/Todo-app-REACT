function TodoDoneBtn({ isTodo, toggleTodo }) {
  return (
    <button
      onClick={toggleTodo}
      className={`toggle_todo_btn ${!isTodo ? 'done' : ''}`}
    >
      {isTodo ? 'done' : 'to do'}
    </button>
  )
}
export default TodoDoneBtn
