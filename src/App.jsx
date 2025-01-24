import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Minting from "./pages/Minting";

const App = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/mint" element={<Minting />} />
  </Routes>
);

export default App;
