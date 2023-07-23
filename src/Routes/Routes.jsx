
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../Home/Home/Home";
import IndividualDetails from "../Pages/IndividualDetails";
import Colleges from "../components/Colleges";
import SearchingCollege from "../components/SearchingCollege";
import Admission from "../components/Admission";
import AdmitClass from "../components/AdmitClass";
import MyClass from "../components/MyClass";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import Register from "../Pages/Authentication/Register";
import SetPassword from "../Home/ChangePassword";
import Dashboard from "../components/Dashboard";
import EditStudentInformation from "../components/EditStudentInformation";
import Feedback from "../Home/Feedback";
import ErrorPage from "../components/ErrorPage";


const Routes = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=>fetch("https://mr-college-server.vercel.app/showCollege"),
        },
        {
            path:"/individualCollege/:id",
            element:<IndividualDetails/>,
            loader:({params})=>fetch(`https://mr-college-server.vercel.app/individual/${params.id}`),
        },
        {
            path:"/colleges",
            element:<Colleges/>,
            loader:()=>fetch("https://mr-college-server.vercel.app/college"),
        },
        {
          path:"/relatedCLass/:id",
          element:<SearchingCollege/>,
          loader:({params})=>fetch(`https://mr-college-server.vercel.app/colleges/${params.id}`),
        },
        {
          path:"/admission",
          element:<Admission/>,
          loader:()=>fetch("https://mr-college-server.vercel.app/college"),
        },
        {
          path:"/admitCollege/:id",
          element:<AdmitClass/>,
          loader:({params})=>fetch(`https://mr-college-server.vercel.app/individual/${params.id}`),
        },
        {
          path:"/myClass",
          element:<MyClass/>,
          loader:()=>fetch("https://mr-college-server.vercel.app/college"),
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>,
        },
        {
          path:"changePassword",
          element:<SetPassword/>
        },
        {
          path:"/dashboard/:email",
          element:<Dashboard/>,
          loader:({params})=>fetch(`https://mr-college-server.vercel.app/studentsClass/${params.email}`),
        },
        {
          path:"/editInformation/:id",
          element:<EditStudentInformation/>,
          loader:({params})=>fetch(`https://mr-college-server.vercel.app/editInformation/${params.id}`),
        },
        {
          path:"/feedback/:id",
          element:<Feedback/>,
          loader:({params})=>fetch(`https://mr-college-server.vercel.app/individual/${params.id}`),
        }
      ]
    },
  ]);

  export default Routes;