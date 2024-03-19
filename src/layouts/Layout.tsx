import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout;