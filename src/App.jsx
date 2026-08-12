import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Hot from "./pages/hot";
import Cold from "./pages/cold";
import Dessert from "./pages/dessert";
import Cart from "./pages/cart";

function App() {
    return (
        <>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 2000,
                }}
            />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hot" element={<Hot />} />
                <Route path="/cold" element={<Cold />} />
                <Route path="/dessert" element={<Dessert />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;