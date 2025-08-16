import "./styles/colors.css";
import "./styles/base.css";
import Header from "./components/Header/Header.jsx";
import { useEffect, useState } from "react";


const App = () => {
  const [theme, toggleTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])
  return (
    <Header theme={theme} toggleTheme={toggleTheme}/>
  )
}

export default App;