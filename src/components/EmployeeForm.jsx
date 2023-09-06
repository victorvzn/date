import { Button, TextField } from "@mui/material";
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

      setForm({
        employeeName: '',
        discount: 0,
        salary: 0
      })
    };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <TextField
        label='Nombre del empleado'
        name="employeeName"
        fullWidth
        margin="dense"
        value={form.employeeName}
        onChange={handleChange}
      />
      <TextField
        label='Descuento'
        name="discount"
        fullWidth
        margin="dense"
        type="number"
        value={form.discount}
        onChange={handleChange}
      />
      <TextField
        label='Salario'
        name="salary"
        fullWidth
        margin="dense"
        type="number"
        value={form.salary}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ width: '100%', mt: 2 }}
      >
        Agregar Empleado
      </Button>
    </form>
  );
};

export default EmployeeForm;
