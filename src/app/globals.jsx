// globals.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.scss";

import Intro from "../components/Intro/Intro";
import Le_jardin from "../components/Le_jardin/Le_jardin";
import Le_jardin_2 from "../components/Le_jardin_vue_2/Le_jardin_vue_2";
import Le_jardin_3 from "../components/Le_jardin_vue_3/Le_jardin_vue_3";
import Menu from "../components/Menu/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Le_jardin_vue_1" element={<Le_jardin />} />
        <Route path="/Le_jardin_vue_2" element={<Le_jardin_2 />} />
        <Route path="/Le_jardin_vue_3" element={<Le_jardin_3 />} />
      </Routes>
    </Router>
  </StrictMode>
);
