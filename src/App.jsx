import Home from "./pages/Home/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterBrand from "./pages/RegisterBrand/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrar-marca" element={<RegisterBrand />} />
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
