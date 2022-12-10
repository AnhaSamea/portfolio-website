import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from '../../Home/Home/Home'
import Pdf from "../../Pdf/Pdf";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            /*             {
                            path: '/pdf',
                            element: <Pdf></Pdf>
                        },
             */
        ]
    }
])

export default router;