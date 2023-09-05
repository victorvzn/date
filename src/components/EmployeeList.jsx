import Employee from './Employee'

const EmployeeList = ({ employees }) => {
  return (
    <>
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

export default EmployeeList