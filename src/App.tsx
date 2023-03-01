import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { NavigationMenu } from "./components"
import { Header } from "./components/Header/Header";
import { About, Contacts, Content, Documents } from "./Pages"




export const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('content');
  }, [])

  return(
    <>
      <Header />
      <NavigationMenu />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='content' element={<Content />}/>
        <Route path='documents' element={<Documents />}/>
        <Route path='contacts' element={<Contacts />}/>
      </Routes>
    </>
  )
}
