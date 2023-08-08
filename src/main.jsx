import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addCoffee',
    element:<AddCoffe></AddCoffe>
  },
  {
    path: 'updateCoffe',
    element:<UpdateCoffe></UpdateCoffe>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
