import { VscOutput } from 'react-icons/vsc'
import TodoDoneBtn from './TodoDoneBtn'
import DoneCounter from './DoneCounter'

function TodoList({ todoItems, setTodoItems }) {
  const handleDelete = (id) => {
    const updatedItems = todoItems.filter((item) => item.id !== id)
    setTodoItems(updatedItems)
  }

  const toggleTodo = (id) => {
    const updatedItems = todoItems.map((item) =>
      item.id === id ? { ...item, isTodo: !item.isTodo } : {...item}
    )
    setTodoItems(updatedItems)
  }
  const doneTodos = todoItems.filter((item) => !item.isTodo)

  return (
    <div className="todo_list">
      {todoItems.map((item) => (
        <div
          key={item.id}
          className={`todo_list_item ${!item.isTodo ? 'done' : ''}`}
        >
          <p className="todo_task">{item.task}</p>
          <p className="todo_timing">{`Time: ${item.time}  Date: ${item.date}`}</p>
          <p>
            <button
              onClick={() => handleDelete(item.id)}
              className="todo_del_single"
            >
              delete
            </button>
            <TodoDoneBtn
              isTodo={item.isTodo}
              toggleTodo={() => toggleTodo(item.id)}
            />
          </p>
        </div>
      ))}
      {todoItems.length <= 0 && <h3 className="todo_tip">No tasks yet</h3>}
      {doneTodos.length > 0 ? <DoneCounter amount={doneTodos.length} /> : null}
    </div>
  )
}

export default TodoList
