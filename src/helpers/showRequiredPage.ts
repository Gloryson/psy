



const getDirection = (Y: number, action: string, touchStart: number): string => {
  switch (action) {
    case 'touch': 
      if (touchStart > Y) return 'forward';
      else if (touchStart < Y) return 'backward';
      break;
    case 'scroll':
      if (Y > 0) return 'forward';
      else if (Y < 0) return 'backward';
      break;
  }
  return '';
}




const showRequiredPage = (Y: number, action: string, state: any, setState: Function): void => {

  let direction = getDirection(Y, action, state.touchStart);

  if (direction) {

    switch (direction) {

      case 'forward': {}
        setState((state: any) => ({...state,
          currPage: state.currPage >= state.amountPages ? 1 : state.currPage + 1,
          isBackScroll: false
        }))
        break;

      case 'backward':
        setState((state: any) => ({...state,
          currPage: state.currPage < 2 ? state.amountPages : state.currPage - 1,
          isBackScroll: true
        }))
        break;

    } 
    setState((state: any) => ({...state, canScroll: false}));
    setTimeout(() => {
      setState((state: any) => ({...state, canScroll: true}));
    }, 510);
    console.log('show')

  }

};




export { showRequiredPage };