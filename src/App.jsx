import { useState } from 'react'
import Clock from './components/Clock'
import EmployeeForm from './components/EmployeeForm'
import Employee from './components/Employee'
import './App.css'

function App() {
  const [employees, setEmployees] = useState([
    {
      name:"Victor",
      discount: 30,
      salary: 3600
    },
    {
      name:"Claudia",
      discount: 10,
      salary: 5000
    }
  ])

  return (
    <>
      <Clock/>
    
      <EmployeeForm  /> 
      
      <Employee
        name="Victor"
        discount={30}
        salary={3600}
      />

      <Employee
        name="Claudia"
        discount={10}
        salary={5000}
      />
    

    </>
  )
}

export default App
