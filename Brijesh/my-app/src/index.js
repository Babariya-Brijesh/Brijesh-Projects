import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contect from './components/Contect';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import store from "./redux/store";
import { Provider } from "react-redux";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
    children: [
      {
        path: "/contacts",
        element: <Contect/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><RouterProvider router={router} /></Provider>
     
  </React.StrictMode>
);


reportWebVitals();
