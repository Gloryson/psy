import { useCallback, useState } from "react";




export const App = () => {

  const [page, setPage] = useState(() => 1);
  const [back, setBack] = useState(() => true);

  const mouseWheel = useCallback((event: any): void => {
    if (event.deltaY > 0) {
      setPage(page => page > 2 ? page = 1 : page + 1);
      setBack(() => false);
    }
    if (event.deltaY < 0) {
      setPage(page => page < 2 ? page = 3 : page - 1);
      setBack(() => true);
    }  
  }, [page]);

  return (
    <div className="container" onWheel={mouseWheel}>
      <div className={`div1 ${page === 1 ? `div-in` : `div-out${back ? `-back` : ``}`}`}>1</div>
      <div className={`div2 ${page === 2 ? `div-in` : `div-out${back ? `-back` : ``}`}`}>2</div>
      <div className={`div3 ${page === 3 ? `div-in` : `div-out${back ? `-back` : ``}`}`}>3</div>
    </div>
  );
}
