import { useState } from "react";

const CreateMessage = ({ addMessage }) => {

  const [textInput, setTextInput] = useState("")

  const userInputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitMessageHandler = (e) => {
    e.preventDefault()
    addMessage(textInput)
    setTextInput("")
  }

  return (
    <>
      <textarea value={textInput} cols={50} rows={5} onChange={userInputHandler}></textarea>
      <button onClick={submitMessageHandler}>Toevoegen</button>
    </>
  )
}

export default CreateMessage;
