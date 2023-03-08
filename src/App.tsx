import { child, getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import { NavigationMenu, Header, Footer } from "./components"
import { normalizeArray } from "./helpers";
import { AboutPage, AdminPage, ContactsPage, ContentPage, DocumentsPage, LoginPage } from "./Pages"


export interface ContentData {
  id: string;
  url: string;
  title: string;
  text: string;
}


export const App = () => {

  const [content, setContent] = useState<ContentData[]>([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
      get(child(dbRef, '/')).then((snapshot) => {
        if (snapshot.exists()) {
          setContent(() => normalizeArray(snapshot.val()));
        }
      }).catch(() => {});
  }, []);

  return(
    <>
      <Header />
      <NavigationMenu />
      <Routes>
        <Route path='psy/about' element={<AboutPage />} />
        <Route path='psy/' element={<ContentPage content={content} />}/>
        <Route path='psy/documents' element={<DocumentsPage />}/>
        <Route path='psy/contacts' element={<ContactsPage />}/>
        <Route path='psy/login' element={<LoginPage />}/>
        <Route path='psy/admin' element={<AdminPage />}/>
      </Routes>
      <Footer />
    </>
  )
}
