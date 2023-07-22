
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

const Routes = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=>fetch("http://localhost:4000/showCollege"),
        },
        {
            path:"/individualCollege/:id",
            element:<IndividualDetails/>,
            loader:({params})=>fetch(`http://localhost:4000/individual/${params.id}`),
        },
        {
            path:"/colleges",
            element:<Colleges/>,
            loader:()=>fetch("http://localhost:4000/college"),
        },
        {
          path:"/relatedCLass/:id",
          element:<SearchingCollege/>,
          loader:({params})=>fetch(`http://localhost:4000/colleges/${params.id}`),
        },
        {
          path:"/admission",
          element:<Admission/>,
          loader:()=>fetch("http://localhost:4000/showCollege"),
        },
        {
          path:"/admitCollege/:id",
          element:<AdmitClass/>,
          loader:({params})=>fetch(`http://localhost:4000/individual/${params.id}`),
        },
        {
          path:"/myClass",
          element:<MyClass/>,
          loader:()=>fetch("http://localhost:4000/showCollege"),
        }
      ]
    },
  ]);

  export default Routes;