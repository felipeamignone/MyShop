import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";
import {ProductMock} from "../../mocks/ProductMock";

const Catalog = () => (
    <Grid container>
        <Grid item>
            select ordenacao
        </Grid>
        <Grid container item>
            {ProductMock.map(product => (
                <Grid item key={product.id}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    </Grid>
);

export default Catalog;