// globals.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.scss";

import Intro from "../components/Intro/Intro";
import Image360 from "../components/Le_jardin/Le_jardin";
import Menu from "../components/Menu/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Le_jardin" element={<Image360 />} />
      </Routes>
    </Router>
  </StrictMode>
);
