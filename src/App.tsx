import { useState } from "react";


export const App = () => {

  const [page, setPage] = useState(1);
  const [back, setBack] = useState(false);



  const mouseWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      setPage(page => page > 4 ? 1 : page + 1);
      setBack(() => false);
    }
    if (event.deltaY < 0) {
      setPage(page => page < 2 ? 5 : page - 1);
      setBack(() => true);
    }
  };



  const setAnimationStyle = (el: number, page: number, back: boolean, amount: number): string => {

    let prev = back ? el - 1 : el + 1;
    prev = prev < 1 ? amount : prev > amount ? 1 : prev;

    if (el === page) return back ? `div-in-back` : `div-in`;
    if (page === prev) return back ? `div-out-back` : `div-out`;

    return `off`;
  }



  return (
    <div className="container" onWheel={mouseWheel}>
      <div className={`div1  ${setAnimationStyle(1, page, back, 5)}`}>. 1 .</div>
      <div className={`div2  ${setAnimationStyle(2, page, back, 5)}`}>. 2 .</div>
      <div className={`div3  ${setAnimationStyle(3, page, back, 5)}`}>. 3 .</div>
      <div className={`div4  ${setAnimationStyle(4, page, back, 5)}`}>. 4 .</div>
      <div className={`div5  ${setAnimationStyle(5, page, back, 5)}`}>. 5 .</div>
    </div>
  );
}
