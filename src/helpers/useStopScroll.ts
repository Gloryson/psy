import { useEffect } from "react";




export const useStopScroll = (modal: string): void => {
  const body = document.querySelector('html') as HTMLElement;
  useEffect(() => {
    if (modal) {
      body.style.overflowY = 'hidden';
    }
    return () => {
      body.style.overflowY = 'scroll';
    }
  }, [modal]);
}