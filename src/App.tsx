import { useEffect, useState } from "react";


export const App = () => {

  const [value, setValue] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    let tid = window.setInterval(() => {
      setValue(val => val + 1);
    }, 1000);

    return () => {
      clearInterval(tid);
    }
  }, [start]);

  


  return (
    <div>
      <button onClick={() => {setStart(true)}}>Start</button>
      <div>{value}</div>
      <button onClick={() => {setStart(false)}}>Stop</button>
    </div>
  );
}
