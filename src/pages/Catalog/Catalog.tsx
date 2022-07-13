import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";
import {ProductMock} from "../../mocks/ProductMock";
import {PageContainer} from "./ProductCard/ProductCard.styles";

const Catalog = () => (
    <PageContainer container xs={12} direction="column">
        <Grid item>
            select ordenacao
        </Grid>
        <Grid container item xs={12} spacing={1} justifyContent="center">
            {ProductMock.map(product => (
                <Grid item key={product.id} xs={6} md={4} lg={2}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    </PageContainer>
);

export default Catalog;