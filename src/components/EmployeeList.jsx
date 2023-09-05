import Employee from './Employee'

const EmployeeList = ({ employees }) => {
  return (
    <>
      {employees.map((employee, index) => {
        return <Employee
          key={employee.id}
          name={employee.name}
          discount={employee.discount}
          salary={employee.salary}
        />
      })}
    </>
  )
}

export default EmployeeList