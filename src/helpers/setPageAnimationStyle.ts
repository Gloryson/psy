



export const setPageAnimationStyle = (page: number, curr: number, prev: number): string => {
  if (page === curr) return 'current__page';
  if (page === prev) return 'previous__page';
  return 'display__off';
}