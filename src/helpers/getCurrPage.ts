



export const getCurrPage = (page: number, direction: string, limit: number): number => {
  switch(direction) {
    case 'forward':
      if (page + 1 > limit) return 1;
      else return page + 1;
    case 'backward':
      if (page - 1 < 1) return limit;
      else return page - 1;
  }
  return 0;
}