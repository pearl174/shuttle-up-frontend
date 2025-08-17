import Layout from "./Layout.jsx"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignUp from "./pages/SignUp/SignUp.jsx";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    }
]

export default routes;