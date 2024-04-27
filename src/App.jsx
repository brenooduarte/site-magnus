import Home from "./pages/Home/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
