import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blog from "../../Home/Blog/Blog";
import Home from '../../Home/Home/Home'
import Card from "../../Home/Projects/Card";
import Project from "../../Home/Projects/Project";

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
            {
                path: '/projetcs/:id',
                
                element: <Project></Project>,
                loader: ({params}) => fetch(`/projetcs/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
           
            
        ]
    }
])

export default router;