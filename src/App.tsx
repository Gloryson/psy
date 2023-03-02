import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { NavigationMenu, Header } from "./components"
import { AboutPage, ContactsPage, ContentPage, DocumentsPage } from "./Pages"




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
        <Route path='about' element={<AboutPage />} />
        <Route path='content' element={<ContentPage />}/>
        <Route path='documents' element={<DocumentsPage />}/>
        <Route path='contacts' element={<ContactsPage />}/>
      </Routes>
    </>
  )
}
