import { Routes, Route } from "react-router-dom"
import { NavigationMenu, Header, Footer } from "./components"
import { AboutPage, ContactsPage, ContentPage, DocumentsPage } from "./Pages"




export const App = () => {

  

  return(
    <>
      <Header />
      <NavigationMenu />
      <Routes>
        <Route path='about' element={<AboutPage />} />
        <Route path='/' element={<ContentPage />}/>
        <Route path='documents' element={<DocumentsPage />}/>
        <Route path='contacts' element={<ContactsPage />}/>
      </Routes>
      <Footer />
    </>
  )
}
