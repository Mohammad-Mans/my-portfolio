import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import ThemeConfig from "./config/theme.config.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </StrictMode>
);
