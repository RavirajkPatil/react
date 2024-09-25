import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//---------------------// function calling is working
function MyApp() {
  return(
    <div>
      <h1>Custom App!!</h1>
    </div>
  )
}
//------------------
const reactElement = {
  type: 'a',
  props: {
      href: 'https:google.com',
      target: '_blank'
  },
  children: 'Click here to visit google'
}
//--------------------
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)
//--------------------
const username = "raviraj"
const secondElement = (
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click here to visit',
  username
)
createRoot(document.getElementById('root')).render(
  <>
  <App />
   {/* <MyApp/> */}
  {/* secondElement  It is no tworking */}
  </>
)
