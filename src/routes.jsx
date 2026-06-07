import Layout from "./Layout.jsx"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/LogIn/LogIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import PlayMatch from "./pages/PlayMatch/PlayMatch.jsx";
import Friends from "./pages/FriendsPage/Friends.jsx";
import LetsPlay from "./pages/LetsPlay/LetsPlay.jsx";

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
                path: "/playMatch",
                element: <PlayMatch />
            },
            {
                path: "/friends/:username",
                element: <Friends />
            },
            {
                path: "/letsPlay",
                element: <LetsPlay />
            }
        ]
    }
]

export default routes;