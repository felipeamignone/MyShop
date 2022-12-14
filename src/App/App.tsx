import PagesRoutes from "../routes";
import Header from "../components/Header";
import { CartProvider } from "../contexts/cart/context";
import { useCart } from "../contexts/cart/useCart";

function App() {
    const useCartValue = useCart();
    return (
        <div className="App">
            <CartProvider value={useCartValue}>
                <Header />
                <PagesRoutes />
            </CartProvider>
        </div>
    );
}

export default App;
