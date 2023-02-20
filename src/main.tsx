// imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./contexts/authContext";

// global css
import "./global.css";

// views
import Home from "./views/Home";
import Commands from "./views/Commands";
import Callback from "./views/Auth/callback";
import Login from "./views/Auth/login";
import Logout from "./views/Auth/logout";
import UserProfile from "./views/Profile";
import Page404 from "./views/Page404";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "*",
                element: <Page404 />,
            },
            {
                path: "/commands",
                element: <Commands />,
            },
            {
                path: "/auth_callback",
                element: <Callback />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <UserProfile />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

// render
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={routes} />
);
