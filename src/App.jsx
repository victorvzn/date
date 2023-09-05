import { useState } from 'react'
import Clock from './components/Clock'
import EmployeeForm from './components/EmployeeForm'
import './App.css'
import EmployeeList from './components/EmployeeList'

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

  const handleAddEmployee = (form) => {
    console.log('Estoy agregando un nuevo empleado...', form)
  }

  return (
    <>
      <Clock/>
    
      <EmployeeForm
        onAddEmployee={handleAddEmployee} /> 

      {/* TODO: Separar la lista de empleados en un componente llamdado EmployeeList.jsx el cual recibirá una propiedad llamada employees en la cual se le pasará el estado employees. */}

      <EmployeeList employees={employees} />
    </>
  )
}

export default App
