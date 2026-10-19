import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Models3D from "./Models.jsx";
import Websites from "./Websites.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modelos-3d" element={<Models3D />} />
          <Route path="/sites" element={<Websites />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
