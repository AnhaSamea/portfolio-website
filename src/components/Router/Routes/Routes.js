import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from '../../Home/Home/Home'
import Card from "../../Home/Projects/Card";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projetcs',
                element: <Card></Card>
            },
           
            
        ]
    }
])

export default router;