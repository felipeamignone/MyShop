import {IProduct} from "../types";
import {Grid, Typography} from "@mui/material";
import {CardContainer, CardPaper, ImageBox} from "./ProductCard.styles";

interface Props {
    product: IProduct
}

const ProductCard = ({product}: Props) => (
    <Grid container justifyContent="center">
        <CardPaper elevation={3}>
            <CardContainer container direction="column" spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item>
                    <ImageBox/>
                </Grid>
                <Grid container item direction="column" spacing={2} alignItems="center">
                    <Grid item>
                        <Typography variant="body1">{product.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">{product.price} R$</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    action buttons
                </Grid>
            </CardContainer>
        </CardPaper>
    </Grid>
);

export default ProductCard;