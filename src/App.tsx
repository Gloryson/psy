import { useEffect, useState } from "react";


export const App = () => {

  const [state, setState] = useState(() => ({
    value: 0,
    isStart: false
  }));
  
  useEffect(() => {
    if (!state.isStart) return;

    let tid = window.setInterval(() => {
      setState((state) => ({...state, value: state.value + 1}));
    }, 1000);

    return () => {
      clearInterval(tid);
    }
  }, [state.isStart]);

  


  return (
    <div>
      <button onClick={() => {setState((state) => ({...state, isStart: true}));}}>Start</button>
      <div>{state.value}</div>
      <button onClick={() => {setState((state) => ({...state, isStart: false}));}}>Stop</button>
    </div>
  );
}
