import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15 

  let [counter,setCounter] = useState(15)

  const addValue = ()=>{
    //console.log("Value added",counter)

    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;

    //if(counter<=20 && counter >=0)
    //---After write below it wouldn't increase value by 3, It increase by only 1.
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1) // this is override all abouve setCounters
/*
    setCounter(prevCounter => prevCounter + 3)  // add value 3 in previous value

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
*/
  }

  const removeValue = () =>{
    //setCounter(counter - 1)

    counter = counter - 1
    if(counter >= 0 && counter<=20)
      setCounter(counter)
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value is : {counter} </h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
