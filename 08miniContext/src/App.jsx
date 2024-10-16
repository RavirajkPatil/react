import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/ContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <h1>This is my context API project</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
