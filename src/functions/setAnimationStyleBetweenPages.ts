

const setAnimationStyleBetweenPages = (element: number, state: any): string => {
  console.log(element)
  let previousPage = state.isBackDirection ? state.page + 1 : state.page - 1;
  previousPage = previousPage < 1 ? state.amountPages : previousPage > state.amountPages ? 1 : previousPage;

  if (element === state.page) {
    return state.isBackDirection ? `div-in-back` : `div-in`;
  }
  if (element === previousPage) {
    return state.isBackDirection ? `div-out-back` : `div-out`;
  }

  return `off`;
}



export { setAnimationStyleBetweenPages };