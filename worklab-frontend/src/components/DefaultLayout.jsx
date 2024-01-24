import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import MenuCadastro from "../pages/Menu";

export default function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <MenuCadastro />
      <Outlet />
    </div>
  )
}