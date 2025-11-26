import Message from "./Message";

const MessageList = ({ name, message }) => {
  return (
    <>
      {message.map((msg, index) => (
        <Message key={index} name={name} message={msg} />
      ))}
    </>
  )
}

export default MessageList;
