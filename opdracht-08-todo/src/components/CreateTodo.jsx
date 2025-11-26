import { useState } from "react"

const CreateTodo = ({ addTodo }) => {
  const [textInput, setTextInput] = useState("")

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (textInput.trim() === "") return
    addTodo(textInput)
    setTextInput("")
  }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        value={textInput}
        onChange={inputHandler}
        placeholder="Voer een taak in"
      />
      <button type="submit">Toevoegen</button>
    </form>
  )
}

export default CreateTodo
