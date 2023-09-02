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
      <div>{time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})}</div>
      <div>
        {time.toLocaleDateString([],{
            weekday:'long',year:'numeric',month:'long',day:'numeric'
        })}
      </div>
    </div>
  );
};

export default Clock;
