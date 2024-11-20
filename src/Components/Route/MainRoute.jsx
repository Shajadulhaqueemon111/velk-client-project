import { Outlet } from "react-router-dom";
import Navbar from "../AllPage/Navbar/NavBar";
import Footer from "../Footer/Footer";

const MainRoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainRoute;
