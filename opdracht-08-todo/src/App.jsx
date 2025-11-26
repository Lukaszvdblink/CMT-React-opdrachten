import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <h1>To-Do App</h1>
      <CreateTodo addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
