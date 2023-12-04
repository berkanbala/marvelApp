import { ThemeContextProvider } from "./common/context/themeContext";
import { AppContextProvider } from "./common/context/marvelContext";
import { AppRoute } from "./routes/appRoute";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppContextProvider>
        <AppRoute />
      </AppContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
