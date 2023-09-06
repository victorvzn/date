import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
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
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}({discount}%)
        </Typography>
        <Typography variant="subtitle2">
          Salario original: {salary} nuevos soles
        </Typography>
        <Typography variant="subtitle2">
          Salario con descuento: {discountSalary} nuevos soles
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleRemoveEmployee(id)}
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Employee;
