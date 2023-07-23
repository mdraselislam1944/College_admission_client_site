import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import AuthProviders from './Pages/Authentication/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders> <RouterProvider router={Routes} /></AuthProviders>
  </React.StrictMode>,
)
