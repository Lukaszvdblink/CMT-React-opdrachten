import Todo from "./Todo"

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} />
      ))}
    </ul>
  )
}

export default TodoList
