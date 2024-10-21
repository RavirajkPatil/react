import { useState } from 'react'
import './App.css'
import AddTodo from './componennts/addTodo'
import Todos from './componennts/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>This is redux toolkit</h2>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
