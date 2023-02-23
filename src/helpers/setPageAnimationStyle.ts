



const getPreviousPage = (state: any): number => {
  let previousPage = state.isBackScroll ? state.currPage + 1 : state.currPage - 1;
  return previousPage < 1 ? state.amountPages : previousPage > state.amountPages ? 1 : previousPage;
}




const setPageAnimationStyle = (position: number, mainClass: string, state: any): string => {
  let previousPage = getPreviousPage(state);
  console.log(position)
  if (position === state.currPage) {
    return mainClass + ' div-in' + (state.isBackScroll ? '-back' : '');
  }
  if (position === previousPage) {
    return mainClass + ' div-out' + (state.isBackScroll ? '-back' : '');
  }
  return 'off';
}




export { setPageAnimationStyle };