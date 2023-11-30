import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes/appRoute";
import { ThemeContextProvider } from "./common/context/themeContext";
import { AppContextProvider } from "./common/context/marvelContext";
import "./index.css";
// import { SWRConfig } from "swr";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const fetcher = (...args: Parameters<typeof fetch>) =>
//   fetch(...args).then((res) => res.json());

root.render(
  <React.StrictMode>
    {/* <SWRConfig value={{ fetcher }}> */}
    <ThemeContextProvider>
      <AppContextProvider>
        <AppRoute />
      </AppContextProvider>
    </ThemeContextProvider>
    {/* </SWRConfig> */}
  </React.StrictMode>
);
