import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.scss";

import Intro from "../components/Intro/Intro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Intro />
  </StrictMode>
);
