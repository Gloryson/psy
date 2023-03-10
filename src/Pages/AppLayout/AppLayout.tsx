import { Outlet } from "react-router-dom"
import { Footer, Header, NavigationMenu } from "../../components"




export const AppLayout = () => {
  return(
    <>
      <Header />
      <NavigationMenu />
      <Outlet />
      <Footer />
    </>
  )
}