import { createBrowserRouter } from "react-router-dom";
import Demo from "./pages/Demo";
import Home from "./pages/Home";
import App from "./App";

// Rutas App
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            index: true,
            path: "/",
            element: <Home />,
        },
        {
            path: "/demo",
            element: <Demo />
        }
    ]
    },
]);