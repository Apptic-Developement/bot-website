import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Commands from './views/Commands';
import Callback from './views/Auth/callback';
import Login from './views/Auth/login';
import Logout from './views/Auth/logout';
import UserProfile from './views/Profile';
import { ProtectedRoute } from './contexts/authContext';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/commands',
        element: <Commands />
      },
      {
        path: '/callback',
        element: <Callback />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: '/profile',
        element: <ProtectedRoute><UserProfile /></ProtectedRoute>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
