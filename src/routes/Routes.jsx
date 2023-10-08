import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../Pages/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import About from "../component/About/About";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Services from "../Pages/Home/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/services',
        element:<Services></Services>,
        loader:()=> fetch('/services.json')
      }
    ]
  }
]);

export default router;