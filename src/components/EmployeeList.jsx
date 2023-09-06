import { Typography } from '@mui/material'
import Employee from './Employee'

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  if (employees.length === 0) {
    return <Typography variant="h5" sx={{ textAlign: 'center' }}>
      No hay empleados registrados
    </Typography>
  }

  return (
    <>
      {employees.map((employee, index) => {
        return <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          discount={employee.discount}
          salary={employee.salary}
          onRemoveEmployee={onDeleteEmployee}
        />
      })}
    </>
  )
}

export default EmployeeList