import { createContext } from "react";

const AuthContext = createContext({user: null, setUser: () => {}, profilePicPath: null, setProfilePicPath: () => {}});

export default AuthContext;