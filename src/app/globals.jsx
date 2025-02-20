import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.scss";

import Image360 from "../components/Image_360/Image_360";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Image360 />
  </StrictMode>
);
