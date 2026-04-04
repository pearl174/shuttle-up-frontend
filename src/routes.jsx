import Layout from "./Layout.jsx"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/LogIn/LogIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ButtonTray from "./pages/Profile/ButtonTray.jsx";
import HeatMap from "./pages/Profile/HeatMap.jsx";

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
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile/:username",
                element: <Profile />
            },
            {
                path: "/profile/:username/heatmap",
                element: <HeatMap />
            }
        ]
    }
]

export default routes;