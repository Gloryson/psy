import { useEffect, useState } from "react"
import { PagesContainer } from "./components";
import { getScrollWay, getY } from "./helpers";




export const App = () => {

  const [state, setState] = useState({ touchStart: 0, direction: '', canScroll: true });

  useEffect(() => {
    if (state.direction && state.canScroll) {
      console.log(state.direction);
      setState(state => ({ ...state, canScroll: false }));
      setTimeout(() => {
        setState(() => ({ touchStart: 0, direction: '', canScroll: true }))
      }, 500);
    }    
  }, [state.direction]);

  return(
    <div 
      className="scroll__container"
      onTouchStart={(e) => {
        setState(state => ({
          ...state, touchStart: getY(e)}));
      }}
      onTouchEnd={(e) => {
        setState(state => ({
          ...state, direction: getScrollWay(state.touchStart, getY(e))}))
      }}
      onWheel={(e) => {
        setState(state => ({
          ...state, direction: getScrollWay(e.deltaY, 0.1)}))
      }}
    >
      <PagesContainer/>
    </div>
  )
}
