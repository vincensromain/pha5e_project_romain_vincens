// globals.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.scss";

import Intro from "../components/Intro/Intro";
import Image360 from "../components/Image_360/Image_360";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* When the URL is "/", show Intro */}
        <Route path="/" element={<Intro />} />

        {/* When the URL is "/image_360", show Image360 */}
        <Route path="/image_360" element={<Image360 />} />
      </Routes>
    </Router>
  </StrictMode>
);
