import { useState } from 'react'
import Clock from './components/Clock'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'

import { Container, Grid } from '@mui/material'

function App() {
  const [employees, setEmployees] = useState(
    () => {
      const savedEmployees = localStorage.getItem('employees')
      if (savedEmployees) {
        return JSON.parse(savedEmployees)
      } else {
        return []
      }
    }
  )

  const handleAddEmployee = (form) => {
    // console.log('Estoy agregando un nuevo empleado...', form)
    const newEmployee = {
      id: crypto.randomUUID(),
      name: form.employeeName,
      discount: form.discount,
      salary: form.salary
    }
    console.log(newEmployee)
    setEmployees([ ...employees, newEmployee ])

    localStorage.setItem('employees', JSON.stringify([ ...employees, newEmployee ]))
  }

  const handleDeleteEmployee = (id) => {
    console.log('handleDeleteEmployee', id)
    const updatedEmployees = employees.filter(employee => employee.id !== id)

    setEmployees(updatedEmployees)

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid xs={4} sx={{ boxShadow: 1 }}>
          <Clock/>
        
          <EmployeeForm
            onAddEmployee={handleAddEmployee} /> 
        </Grid>
        <Grid xs={8} sx={{ boxShadow: 1 }}>
          {/* TODO: Separar la lista de empleados en un componente llamdado EmployeeList.jsx el cual recibirá una propiedad llamada employees en la cual se le pasará el estado employees. */}

          <EmployeeList
            employees={employees}
            onDeleteEmployee={handleDeleteEmployee}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
