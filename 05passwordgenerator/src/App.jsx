import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [paswword, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="<>?:{}()%@#$^&"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword])
  
  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(paswword)
  }, [paswword])

  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <h1 className="text-center text-4xl">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={paswword} className='outline-none w-screen py-1 px-3' placeholder='Password' ref={passwordRef} readOnly/>
        <button className='outline-none bg-blue-700 px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer'
            onChange ={(e)=> {setLength(e.target.value)}}
            />
          <label className='text-blue-600'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' 
            onChange={()=>{ setNumberAllowed((prev) => !prev) }}
            />
          <label className='text-blue-600'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} id='characterInput' 
            onChange={()=>{ setCharAllowed((prev) => !prev) }}
            />
          <label className='text-blue-600' htmlFor="characterInput">Character</label>
        </div>

      </div>
    </>
  )
}

export default App