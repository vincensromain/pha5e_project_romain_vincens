import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

import Intro from "../components/Intro/Intro";
import Le_jardin_1 from "../components/Le_jardin_vue_1/Le_jardin_vue_1";
import Le_jardin_2 from "../components/Le_jardin_vue_2/Le_jardin_vue_2";
import Le_jardin_3 from "../components/Le_jardin_vue_3/Le_jardin_vue_3";
import Article_1 from "../components/Article_1/Article_1";
import Article_2 from "../components/Article_2/Article_2";
import Article_3 from "../components/Article_3/Article_3";
import Article_4 from "../components/Article_4/Article_4";
import Article_5 from "../components/Article_5/Article_5";
import Article_6 from "../components/Article_6/Article_6";
import Menu from "../components/Menu/Menu";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Le_jardin_vue_1" element={<Le_jardin_1 />} />
        <Route path="/Le_jardin_vue_2" element={<Le_jardin_2 />} />
        <Route path="/Le_jardin_vue_3" element={<Le_jardin_3 />} />
        <Route path="/Article_1" element={<Article_1 />} />
        <Route path="/Article_2" element={<Article_2 />} />
        <Route path="/Article_3" element={<Article_3 />} />
        <Route path="/Article_4" element={<Article_4 />} />
        <Route path="/Article_5" element={<Article_5 />} />
        <Route path="/Article_6" element={<Article_6 />} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
