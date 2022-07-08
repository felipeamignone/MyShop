import {Route, Routes} from 'react-router-dom'
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

const PagesRoutes = () => (
    <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="success" element={<Success/>}/>
    </Routes>
)

export default PagesRoutes;