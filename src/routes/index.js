import Home from "../Layouts/Home";
import Signin from "../Layouts/Signin";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Signin",
        component: Signin,
    },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }