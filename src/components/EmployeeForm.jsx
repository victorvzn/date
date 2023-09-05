import React, { useState } from "react";

const EmployeeForm = ({ onAddEmployee }) => {
    const [form, setForm] = useState({
      employeeName: '',
      discount: 0,
      salary: 0
    })

    const handleChange = (event) => {
      const input = event.target
      const name = input.name
      const value = input.value

      setForm({ ...form, [name]: value })
    }

    const handleSubmit =(event)=>{
      event.preventDefault();
      if(!form.employeeName || !form.discount || !form.salary){
          alert("verifica los datos ingresados");
          return;
      }else if (form.discount > 100 || form.discount <0){
          const discountValidate=
          form.discount < 0 
          ? alert("el descuento no puede ser menor a 0")
          : alert("el descuento no debe ser mayor a 100");
          return discountValidate
      }
      console.log(form.employeeName, form.discount, form.salary)
      
      onAddEmployee(form)
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Nombre del empleado
          <input type="tesxt" name="employeeName" value={form.employeeName} onChange={handleChange}/>
        </label>
        <br />
        <label htmlFor="">
         Descuento
          <input type="text" name="discount" value={form.discount} onChange={handleChange} />
        </label>
         <br />
        <label htmlFor="">
         salario
          <input type="text" name="salary" value={form.salary} onChange={handleChange} />
        </label>

        <br />
        <button>Agregar Empleado</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
