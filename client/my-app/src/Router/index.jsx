import {
    createBrowserRouter
  } from "react-router-dom";
import Details from "../Components/Details";
import Add from "../Pages/Add";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/add",
        element: <Add/>,
      },
      {
        path: "/details/:id",
        element: <Details/>,
      },
  ]);

  export default router