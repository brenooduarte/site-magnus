import Home from "./pages/Home/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterBrand from "./pages/RegisterBrand/index.jsx";
import BrandRejected from "./pages/BrandRejected/index.jsx";
import Opposition from "./pages/Opposition/index.jsx";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/registrar-marca" element={<RegisterBrand />} />
        <Route path="/marca-indeferida" element={<BrandRejected />} />
        <Route path="/oposicao" element={<Opposition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
