import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./componenets/form";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Form></Form>
     </div>
    </>
  )
}

export default App
