import React from "react"
import "../styles/header.css"

const Header = ({
  handleAll,
  handleCompleted,
  handleNotcompleted,
  handleFilter,
}) => {
  return (
    <div className="header-container">
      <h1>TODO LIST</h1>
      <div className="acciones">
        <button
          className={handleFilter === "All" ? "select" : "notselect"}
          onClick={() => handleAll("All")}
        >
          All
        </button>
        <button
          className={handleFilter === "Completed" ? "select" : "notselect"}
          onClick={() => handleCompleted("Completed")}
        >
          Completed
        </button>
        <button
          className={handleFilter === "Notcompleted" ? "select" : "notselect"}
          onClick={() => handleNotcompleted("Notcompleted")}
        >
          Not completed
        </button>
      </div>
    </div>
  )
}

export default Header
