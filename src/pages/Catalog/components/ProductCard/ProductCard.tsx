import {IProduct} from "../../types";
import {CardContainer, CardPaper, ImageBox} from "./ProductCard.styles";
import CardButtons from "../CardButtons";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
                        product={{requestAmount: 0, id: product.id, price: product.price}}
                    />
                </Grid>
            </CardContainer>
        </CardPaper>
    </Grid>
);

export default ProductCard;