import "./styles/colors.css";
import "./styles/base.css";
import Header from "./components/Header/Header.jsx";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";


const App = () => {
  const [theme, toggleTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])
  return (
    <>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <LandingPage />
    </>
  )
}

export default App;