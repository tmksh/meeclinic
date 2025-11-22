import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PcScreen } from "./screens/PcScreen";

const App = () => {
  return <PcScreen />;
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
