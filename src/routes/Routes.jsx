import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../Pages/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import About from "../component/About/About";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import ServicesDetails from "../component/ServicesDetails/ServicesDetails";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../component/ContactUs/ContactUs";
// import Services from "../Pages/Home/Services";

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
        path:'/contactUs',
        element:<ContactUs></ContactUs>

      },
      {
        path:'/servicedetails/:id',
        element:<PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
        loader:()=> fetch('/services.json')
      }
    ]
  }
]);

export default router;