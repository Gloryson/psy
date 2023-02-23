import { useEffect, useMemo } from "react";
import { State } from "../App";
import { setPageAnimationStyle } from "../helpers";
import { showRequiredPage } from "../helpers";



interface AppAnimationProps {
  state: State;
  setState: (state: any) => any;
}

export const AppAnimationContainer: React.FC<AppAnimationProps> = ({state, setState}) => {

  useEffect(() => {
    if (state.canScroll) {
      const touchStartHandler = (event: any) => {
        setState((state: State) => ({...state, touchStart: event.changedTouches[0].screenY}));
      };
      const touchEndHandler = (event: any) => {
        showRequiredPage(event.changedTouches[0].screenY, 'touch', state, setState);
      };
      const whellHandler = (event: any) => {
        showRequiredPage(event.deltaY, 'scroll', state, setState);
      };
      const resizeHandler = () => {
        setState((state: State) => ({...state, jsHeight: `${window.innerHeight}px`}));
      };
      window.addEventListener('resize', resizeHandler);
      window.addEventListener('touchstart', touchStartHandler);
      window.addEventListener('touchend', touchEndHandler);
      window.addEventListener('wheel', whellHandler);  
      return () => {
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('touchstart', touchStartHandler);
        window.removeEventListener('touchend', touchEndHandler);
        window.removeEventListener('wheel', whellHandler);
      }
    }
  });



  return(
    <div className="global__container" style={{'--js-height': state.jsHeight} as React.CSSProperties} >
      {useMemo(() => {
        return <>
          <div className={setPageAnimationStyle(1, 'div1', state)}>. 1 .</div>
          <div className={setPageAnimationStyle(2, 'div2', state)}>. 2 .</div>
          <div className={setPageAnimationStyle(3, 'div3', state)}>. 3 .</div>
          <div className={setPageAnimationStyle(4, 'div4', state)}>. 4 .</div>
          <div className={setPageAnimationStyle(5, 'div5', state)}>. 5 .</div>
        </>
      }, [state.currPage])}
    </div>
  )
}