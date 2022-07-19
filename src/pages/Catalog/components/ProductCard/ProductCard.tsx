import {IProduct} from "../../types";
import {Grid, Typography} from "@mui/material";
import {CardContainer, CardPaper, ImageBox} from "./ProductCard.styles";
import CardButtons from "../CardButtons";

interface Props {
    product: IProduct
}

const formatPriceToLocaleString = (price: number) => price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
})

const ProductCard = ({product}: Props) => (
    <Grid container justifyContent="center">
        <CardPaper elevation={3}>
            <CardContainer container direction="column" spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item>
                    <ImageBox>
                        <img src={product.imgSrc} alt="product-img"/>
                    </ImageBox>
                </Grid>
                <Grid container item direction="column" spacing={2} alignItems="center">
                    <Grid item>
                        <Typography variant="body1">{product.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            {formatPriceToLocaleString(product.price)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <CardButtons
                        availableAmount={product.availableAmount}
                        selectedAmount={product.selectedAmount}
                    />
                </Grid>
            </CardContainer>
        </CardPaper>
    </Grid>
);

export default ProductCard;