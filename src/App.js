import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Todo from "./components/Todo"
function App() {
  //STATE
  const [dataApi, setdataApi] = useState([])
  const [filter, setfilter] = useState([])
  const [handleFilter, sethandleFilter] = useState("All")

  //HOOKS
  useEffect(() => {
    document.title = "TODO LIST"
    const getData = async () => {
      const response = await (
        await fetch("https://jsonplaceholder.typicode.com/todos")
      ).json()
      const result = response.slice(0, 20)
      setdataApi(result)
    }
    getData()
  }, [])

  //Functions

  const handleStatus = (id) => {
    setdataApi(
      dataApi.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const handleAll = (string) => {
    sethandleFilter(string)
  }

  const handleCompleted = (string) => {
    sethandleFilter(string)
  }
  const handleNotcompleted = (string) => {
    sethandleFilter(string)
  }

  useEffect(() => {
    if (handleFilter === "Completed") {
      setfilter(dataApi.filter((item) => item.completed === true))
    } else if (handleFilter === "Notcompleted") {
      setfilter(dataApi.filter((item) => item.completed === false))
    } else {
      setfilter(dataApi)
    }
  }, [handleFilter, dataApi])

  return (
    <div className="App">
      <Header
        handleAll={handleAll}
        handleCompleted={handleCompleted}
        handleNotcompleted={handleNotcompleted}
        handleFilter={handleFilter}
      ></Header>

      <main className="todo-container">
        {dataApi
          ? filter.map((item) => (
              <Todo
                key={item.id}
                title={item.title}
                status={item.completed}
                id={item.id}
                handleStatus={handleStatus}
              />
            ))
          : null}
      </main>
    </div>
  )
}

export default App
