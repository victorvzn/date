import Employee from './Employee'

const EmployeeList = ({ employees, onDeleteEmployee }) => {
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