



export const getScrollWay = (start: number, end: number): string => {
  if (start && end && start > end) return 'forward';
  if (start && end && start < end) return 'backward';
  return '';
}