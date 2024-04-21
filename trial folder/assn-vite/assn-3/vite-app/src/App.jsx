import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { ValidationForm } from './components/Validation'
import { CustomForm } from './components/Custom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input/>
      <ValidationForm/>
      <CustomForm/>
    </>
  )
}

export default App;
