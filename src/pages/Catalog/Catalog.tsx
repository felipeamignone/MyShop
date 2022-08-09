import ProductCard from "./components/ProductCard";
import {PageContainer} from "./components/ProductCard/ProductCard.styles";
import Grid from "@mui/material/Grid";
import {useCatalog} from "../../contexts/catalog/useCatalog";
import {CartProvider} from "../../contexts/cart/context";
import {useCart} from "../../contexts/cart/useCart";

const Catalog = () => {
    const {state: {products}} = useCatalog();

    return (
        <PageContainer container direction="column" spacing={3}>
            <Grid item>
                select ordenacao
            </Grid>
            <Grid container item xs={12} spacing={2} justifyContent="center">
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    )
};

const CatalogWrapper = () => {
    const value = useCart();
    return (<CartProvider value={value}><Catalog/></CartProvider>)
}

export default CatalogWrapper;