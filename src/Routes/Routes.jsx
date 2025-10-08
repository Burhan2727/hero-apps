import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Error from "../Error/Error";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/apps",
                element: <Apps/>
            },
            {
                path: "/installation",
                element: <Installation/>
            },
            {
                path: "/apps/:id",
                element: <AppDetails/>
            }
        ]
    },
    {
        path: "*",
        element: <Error/>
    }
])
export default router