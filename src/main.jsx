import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Route/AllRoute";
// import GoToTop from "./Components/GoToTop/GoToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <GoToTop></GoToTop> */}

    <RouterProvider router={router} future={{ v7_fetcherPersist: true }} />
  </StrictMode>
);
