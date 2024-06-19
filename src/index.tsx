import { AppContextProvider } from "./common/context/marvelContext";
import { AppRoute } from "./routes/appRoute";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRoute />
    </AppContextProvider>
  </React.StrictMode>
);
