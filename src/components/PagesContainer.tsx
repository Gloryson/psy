import { useEffect, useMemo, useState } from "react";
import { getClientHeight, getCurrPage, setPageAnimationStyle } from "../helpers";
import { AboutPage } from "./AboutPage"
import { ContactPage } from "./ContactPage"
import { MainPage } from "./MainPage"




export const PagesContainer: React.FC<{ direction: string }> = ({ direction }) => {

  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    if (direction) {
      setPrevPage(() => currPage);
      setCurrPage(() => getCurrPage(currPage, direction, 3));
    }
    getClientHeight();
  }, [direction]);

  

  return(useMemo(() => {
        return <>
          <MainPage style={setPageAnimationStyle(1, currPage, prevPage)} />
          <AboutPage style={setPageAnimationStyle(2, currPage, prevPage)} />
          <ContactPage style={setPageAnimationStyle(3, currPage, prevPage)} />
        </>
      }, [currPage])
  )
}