import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeHandlerProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeHandlerProvider>
        <App />
      </ThemeHandlerProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
