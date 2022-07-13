import {IProduct} from "../types";
import {Grid, Paper, Typography} from "@mui/material";

interface Props {
    product: IProduct
}

const ProductCard = ({product}: Props) => (
    <Paper elevation={3}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                img
            </Grid>
            <Grid item>
                <Typography variant="body1">{product.name}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2">{product.price}</Typography>
            </Grid>
            <Grid item>
                action buttons
            </Grid>
        </Grid>
    </Paper>
);

export default ProductCard;