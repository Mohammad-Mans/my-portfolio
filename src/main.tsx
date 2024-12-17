import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ThemeConfig from "./config/theme.config.tsx";
import "./config/firebaseConfig.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeConfig>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeConfig>
  </StrictMode>
);