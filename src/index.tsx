import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import SystemProvider from "./contexts/SystemContext";
import MainRoutes from "./routes";
import { GlobalStyles } from "./styles/globlal";
import theme from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer
    position="top-center"
    closeOnClick={true}
    theme="dark"/>
      <ThemeProvider theme={theme}>
        <SystemProvider>
          <GlobalStyles />
          <MainRoutes />
        </SystemProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
