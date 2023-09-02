import { useState } from 'react'
import Clock from './components/Clock'
import EmployeeForm from './components/EmployeeForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Clock/>
    <EmployeeForm/>
    </>
  )
}

export default App
