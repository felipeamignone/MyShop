import PagesRoutes from "../routes";
import Header from "../components/Header";
import { CartProvider } from "../contexts/cart/context";
import { useCart } from "../contexts/cart/useCart";
import { useCatalog } from "../contexts/catalog/useCatalog";
import { CatalogProvider } from "../contexts/catalog/context";

function App() {
    const useCartValue = useCart();
    const useCatalogValue = useCatalog();

    return (
        <div className="App">
            <CatalogProvider value={useCatalogValue}>
                <CartProvider value={useCartValue}>
                    <Header />
                    <PagesRoutes />
                </CartProvider>
            </CatalogProvider>
        </div>
    );
}

export default App;
