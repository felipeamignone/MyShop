import ProductCard from "./components/ProductCard";
import { PageContainer } from "./components/ProductCard/ProductCard.styles";
import Grid from "@mui/material/Grid";
import { useCatalogContext } from "../../contexts/catalog/context";

const Catalog = () => {
    const { state: { products } } = useCatalogContext();

    return (
        <PageContainer container direction="column" spacing={3}>
            <Grid item>
                select ordenacao
            </Grid>
            <Grid container item xs={12} spacing={2} justifyContent="flex-start">
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    )
};

export default Catalog;