import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document
      .querySelector("html")
      .classList.remove("light", "dark");

    document
      .querySelector("html")
      .classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 ">
        
        <div>
          <ThemeBtn />
        </div>

        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;