// globals.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.scss";

import Intro from "../components/Intro/Intro";
import Image360 from "../components/Image_360/Image_360";
import Menu from "../components/Menu/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/image_360" element={<Image360 />} />
      </Routes>
    </Router>
  </StrictMode>
);
