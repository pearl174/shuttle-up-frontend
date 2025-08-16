import { useState, useEffect } from "react";
import "./styles/colors.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", padding: "2rem" }}>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="primary-btn"
        style={{ marginBottom: "2rem" }}
      >
        Toggle Theme
      </button>

      <h1>Theme Test Playground</h1>
      <p className="text-muted">Muted text to check secondary contrast</p>

      <a href="#" className="link">This is a link</a>

      <div className="card" style={{ marginTop: "1rem" }}>
        <h2>Card Title</h2>
        <p>Card body text with default text color.</p>
        <button className="secondary-btn">Secondary Button</button>
      </div>

      <form style={{ marginTop: "2rem" }}>
        <label>
          Text Input:
          <input type="text" placeholder="Type something..." />
        </label>
        <label>
          Select Box:
          <select>
            <option>Option One</option>
            <option>Option Two</option>
          </select>
        </label>
      </form>
    </div>
  );
}
