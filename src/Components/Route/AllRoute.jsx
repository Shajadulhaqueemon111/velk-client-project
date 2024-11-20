import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import Error from "../ErrorPage/Error";
import Home from "../AllPage/Home/Home";
import MsterAgent from "../MasterAgentList/MsterAgent";
import SuperAgentList from "../SuperAgentList/SuperAgentList";
import SubAdminList from "../SubAdminLIst/SubAdminList";
import SideAdminList from "../SideAdminLIst/SideAdminList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/master-agent-list",
        element: <MsterAgent></MsterAgent>,
      },
      {
        path: "/super-agent-list",
        element: <SuperAgentList></SuperAgentList>,
      },
      {
        path: "/sub-admin-list",
        element: <SubAdminList></SubAdminList>,
      },
      {
        path: "/side-admin-list",
        element: <SideAdminList></SideAdminList>,
      },
    ],
  },
]);

export default router;
