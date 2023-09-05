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
    },
    {
      name: "Mariana",
      discount: 5,
      salary: 11000
    }
  ])

  return (
    <>
      <Clock/>
    
      <EmployeeForm  /> 
      
      {employees.map((employee, index) => {
        return <Employee
          key={index}
          name={employee.name}
          discount={employee.discount}
          salary={employee.salary}
        />
      })}
      
      
      

    </>
  )
}

export default App
