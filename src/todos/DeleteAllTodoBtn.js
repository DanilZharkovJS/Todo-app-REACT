import { MdDeleteForever } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'

function DeleteTodoBtn({ todos, setTodos }) {
  const handleClickAll = (e) => {
    if (
      todos.length > 0 &&
      window.confirm('Are you sure you want to delete all todos?')
    ) {
      e.preventDefault()
      setTodos([])
    }
  }

  const handleClickDone = () => {
    const updatedTodos = todos.filter((todo) => todo.isTodo === true)
    setTodos(updatedTodos)
  }

  return todos.length > 0 ? (
    <div>
      <button onClick={handleClickAll} className="todo_del_all">
        <MdDeleteForever className="todo_del_all_icon" /> Delete All
      </button>
      <button onClick={handleClickDone} className="todo_del_done">
        <FaCheck /> Delete completed
      </button>
    </div>
  ) : null
}

export default DeleteTodoBtn
