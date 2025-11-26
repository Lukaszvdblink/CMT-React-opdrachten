import React, { useState } from 'react'
import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
  const [message, setMessage] = useState([])
  const name = "Lukasz"

  const addMessageHandler = (newMessage) => {
    setMessage(prev => [...prev, newMessage])
  }

  return (
    <>
      <CreateMessage addMessage={addMessageHandler} />
      <MessageList name={name} message={message} />
    </>
  )
}

export default App
