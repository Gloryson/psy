import { useMemo, useEffect, useState } from "react";
import { setAnimationStyleBetweenPages } from "./functions/setAnimationStyleBetweenPages";




export const App = () => {

  const [state, setState] = useState({
    page: 1,
    isBackDirection: false,
    touchStart: 0,
    amountPages: 5,
    canScroll: true
  })

  useEffect(() => {
    if (state.canScroll) {

      const touchStartListener = (event: any) => {
        setState(state => ({...state, touchStart: event.changedTouches[0].screenY}));
      }

      const touchEndListener = (event: any) => {
        showRequiredPage(event.changedTouches[0].screenY, 'touch');
      }

      const whellListener = (event: any) => {
        showRequiredPage(event.deltaY, 'scroll');
      }
  
      window.addEventListener('touchstart', touchStartListener);
      window.addEventListener('touchend', touchEndListener);
      window.addEventListener('wheel', whellListener);
  
      return () => {
        window.removeEventListener('touchstart', touchStartListener);
        window.removeEventListener('touchend', touchEndListener);
        window.removeEventListener('wheel', whellListener);
      }
    }
    
  })

  const showRequiredPage = (Y: number, action: string): void => {
    if ((action === 'touch' && state.touchStart > Y) || (action === 'scroll' && Y > 0)) {
      setState(state => ({
        ...state,
        page: state.page >= state.amountPages ? 1 : state.page + 1,
        isBackDirection: false
      }))
    } else {
      setState(state => ({
        ...state,
        page: state.page < 2 ? state.amountPages : state.page - 1,
        isBackDirection: true
      }))
    }
    setState(state => ({...state, canScroll: false}));
    setTimeout(() => {
      setState(state => ({...state, canScroll: true}));
    }, 510)
    console.log('show')
  };

  

  return (
    <div className="container">
      {useMemo(() => {
        return <>
          <div className={`div1  ${setAnimationStyleBetweenPages(1, state)}`}>. 1 .</div>
          <div className={`div2  ${setAnimationStyleBetweenPages(2, state)}`}>. 2 .</div>
          <div className={`div3  ${setAnimationStyleBetweenPages(3, state)}`}>. 3 .</div>
          <div className={`div4  ${setAnimationStyleBetweenPages(4, state)}`}>. 4 .</div>
          <div className={`div5  ${setAnimationStyleBetweenPages(5, state)}`}>. 5 .</div>
        </>
      }, [state.page])}
    </div>
  );
}
