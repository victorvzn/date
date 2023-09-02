import { useState } from 'react'
import Clock from './components/Clock'
import EmployeeForm from './components/EmployeeForm'
import Employee from './components/Employee'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Clock/>
    <EmployeeForm/> 
    <Employee/>
    

    </>
  )
}

export default App
