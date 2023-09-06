import { Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return ()=>clearInterval(interval)
  },[]);

  return (
    <div>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          {time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})}
        </Typography>
      </Paper>
      <div>
        {time.toLocaleDateString([],{
            weekday:'long',year:'numeric',month:'long',day:'numeric'
        })}
      </div>
    </div>
  );
};

export default Clock;
