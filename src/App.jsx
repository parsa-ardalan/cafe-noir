import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hot from "./pages/hot";
import Cold from "./pages/cold";
import Dessert from "./pages/dessert";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hot" element={<Hot />} />
            <Route path="/cold" element={<Cold />} />
            <Route path="/dessert" element={<Dessert />} />
        </Routes>
    );
}

export default App;