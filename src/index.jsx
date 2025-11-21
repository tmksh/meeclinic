import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { PcScreen } from "./screens/PcScreen";
import { SpScreen } from "./screens/SpScreen";

// レスポンシブ対応：画面幅で切り替え（1024px未満はスマホ版）
const isMobile = () => window.innerWidth < 1024;

const App = () => {
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mobile ? <SpScreen /> : <PcScreen />;
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
