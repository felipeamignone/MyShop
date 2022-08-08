import PagesRoutes from "../routes";
import Header from "../components/Header";
import {CartProvider, useCartProvider} from "../contexts/cart/context";
import {CatalogProvider, useCatalogProvider} from "../contexts/catalog/context";

function App() {
    const cartHook = useCartProvider();
    const catalogHook = useCatalogProvider();
    return (
        <div className="App">
            <CatalogProvider value={catalogHook}>
                <CartProvider value={cartHook}>
                    <Header/>
                    <PagesRoutes/>
                </CartProvider>
            </CatalogProvider>
        </div>);
}

export default App;
