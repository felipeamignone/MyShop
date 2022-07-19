import {Grid} from "@mui/material";
import ProductCard from "./components/ProductCard";
import {ProductMock} from "../../mocks/ProductMock";
import {PageContainer} from "./components/ProductCard/ProductCard.styles";

const Catalog = () => (
    <PageContainer container direction="column" spacing={3}>
        <Grid item>
            select ordenacao
        </Grid>
        <Grid container item xs={12} spacing={2} justifyContent="center">
            {ProductMock.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    </PageContainer>
);

export default Catalog;