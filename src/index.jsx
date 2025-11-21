import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PcScreen } from "./screens/PcScreen";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <PcScreen />
  </StrictMode>,
);
