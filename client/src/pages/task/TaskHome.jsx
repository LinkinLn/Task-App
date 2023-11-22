import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export default function TaskHome() {
  return (
    <>
        <Navbar />
        <div>{Outlet && <Outlet />}</div>
    </>
    
  )
}
