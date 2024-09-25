import Chai from "./Chai"

function App() {
  const username="with React"
  return (
     <>        //  call this Fragment also we can use div
      <Chai/>
       <h2>Vite project by Riddhesh {username}</h2> {/* username is a evaluated expression */}
    </>
  )
}

export default App
