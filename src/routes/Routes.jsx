import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChefDetails from "../Pages/Home/ChefDetails/ChefDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "home",
                element: <Home></Home>,
            },
            {
                path: "chef/:id",
                element: <ChefDetails></ChefDetails>,
                loader: () => fetch('/Top_Chefs.json')
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);


export default router;