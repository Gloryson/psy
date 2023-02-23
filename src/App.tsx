import { useState } from "react";
import { AppAnimationContainer } from "./components/AppAnimationContainer";


export interface State {
  currPage: 1;
  isBackScroll: boolean;
  touchStart: number;
  amountPages: number;
  canScroll: boolean;
  jsHeight: string;
}


export const App = () => {

  const [state, setState] = useState<State>({
    currPage: 1,
    isBackScroll: false,
    touchStart: 0,
    amountPages: 5,
    canScroll: true,
    jsHeight: `${window.innerHeight}px`
  })


  
  return (
    <AppAnimationContainer
      state={state}
      setState={setState}
    />
  );
}
