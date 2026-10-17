import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Models3D from "./Models.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modelos-3d" element={<Models3D />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
