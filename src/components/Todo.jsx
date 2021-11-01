import React from "react"
import "../styles/todo.css"
const Todo = ({ title, status, id, handleStatus }) => {
  return (
    <div className={status ? "card completed" : " card noCompleted"}>
      <h3>{title}</h3>
      <button
        onClick={() => handleStatus(id)}
        className={status ? "completedBtn" : "noCompletedBtn"}
      >
        {status ? "Completed" : "Not Completed"}
      </button>
    </div>
  )
}

export default Todo
