



export const getClientHeight =  ():void => {
  let doc = document.documentElement;
  doc.style.setProperty('--client-height', `${doc.clientHeight}px`);
}