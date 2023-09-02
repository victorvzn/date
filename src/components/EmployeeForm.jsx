import React, { useState } from "react";

const EmployeeForm = () => {
    const[employeeName,setEmployeeName]=useState("")
    const[discount,setDiscount]=useState("")
    const[salary,setSalary]=useState("")

    const handleSubmit =(event)=>{
     event.preventDefault();
     if(!employeeName || !discount || !salary){
        alert("verifica los datos ingresados");
        return;
     }else if (discount > 100 || discount <0){
        const discountValidate=
        discount < 0 
        ? alert("el descuento no puede ser menor a 0")
        : alert("el descuento no debe ser mayor a 100");
        return discountValidate
     }

    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Nombre del empleado
          <input type="text" value={employeeName} onChange={(event =>setEmployeeName(event.target.value))}/>
        </label>
        <br />
        <label htmlFor="">
         Descuento
          <input type="text" value={discount} onChange={(event =>setDiscount(event.target.value))} />
        </label>
         <br />
        <label htmlFor="">
         salario
          <input type="text" value={salary} onChange={(event =>setSalary(event.target.value))} />
        </label>

        <br />
        <button>Agregar Empleado</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
