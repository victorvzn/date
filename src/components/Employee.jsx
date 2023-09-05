import React from "react";

const Employee = ({ id, name, discount, salary = 0, onRemoveEmployee }) => {
  const calculateDiscountSalary = (salary, discount) => {
    return salary - (salary * discount) / 100;
  };

  const discountSalary = calculateDiscountSalary(salary, discount);

  const handleRemoveEmployee = (id) => {
    console.log('>>>handleRemoveEmployee...', id)
    onRemoveEmployee(id)
  }

  return (
    <div>
      <h3>
        {name}({discount}%)
      </h3>
      <p>salario original : {salary} nuevos soles</p>
      <p>Salario con descuento:{discountSalary} nuevos soles</p>
      <button onClick={() => handleRemoveEmployee(id)}>Eliminar Empleado</button>
    </div>
  );
};

export default Employee;
