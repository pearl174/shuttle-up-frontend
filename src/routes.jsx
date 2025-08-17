import Layout from "./Layout.jsx"
import LandingPage from "./pages/LandingPage/LandingPage"

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
        ]
    }
]

export default routes;