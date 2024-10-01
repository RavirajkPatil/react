import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj={
    name:'Ridu',
    age: 3,
    add: 'Pune'
  }
 
  let myArr = [1,2,3,4,5,6,7]
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black width'>Tailwind CSS</h1>
      {/* <Card username ="Chai aur code"/><br/> */}
      {/* <Card  object={myObj}/>
      <Card object = {myArr}/> */}

      <Card username = "Riddhesh" btnText ="Click here"/>
      <Card username = "Raviraj"/>
    </>
  )
}

export default App
