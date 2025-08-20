import Layout from "./Layout.jsx"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/LogIn/LogIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ProfilePic from "./components/ProfilePic/ProfilePic.jsx";

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
                // temporary
                path: "/profilepic",
                element: <ProfilePic />
            },
        ]
    }
]

export default routes;