import Home from "./pages/Home/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RegisterBrand from "./pages/RegisterBrand/index.jsx";
import BrandRejected from "./pages/BrandRejected/index.jsx";
import Opposition from "./pages/Opposition/index.jsx";
import RegisterSoftware from "./pages/RegisterSoftware/index.jsx";
import Consultancy from "./pages/Consultancy/index.jsx";
import Header from "./components/Header/index.jsx";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar-marca" element={<RegisterBrand />} />
        <Route path="/marca-indeferida" element={<BrandRejected />} />
        <Route path="/oposicao" element={<Opposition />} />
        <Route path="/registrar-software" element={<RegisterSoftware />} />
        <Route path="/consultoria" element={<Consultancy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
