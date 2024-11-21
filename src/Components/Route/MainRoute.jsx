import { Outlet } from "react-router-dom";
import Navbar from "../AllPage/Navbar/NavBar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainRoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainRoute;
