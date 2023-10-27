import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes/appRoute";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./common/context/themeContext";
import { AppContextProvider } from "./common/context/marvelContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <AppContextProvider>
          <AppRoute />
        </AppContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
