import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.scss";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
  </StrictMode>
);
