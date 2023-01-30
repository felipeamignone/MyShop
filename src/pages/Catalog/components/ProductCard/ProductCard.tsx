import { IProduct } from "../../types";
import { CardContainer, CardPaper, ImageBox } from "./ProductCard.styles";
import CardButtons from "../CardButtons";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useCartContext } from "../../../../contexts/cart/context";
import { useCatalogContext } from "../../../../contexts/catalog/context";
import { formatPriceToLocaleString } from "../../../../utils";

interface Props {
    product: IProduct
}

const ProductCard = ({ product }: Props) => {
    const { state, addProduct, rmvProduct } = useCartContext();
    const { state: { products } } = useCatalogContext();

    const handleAddProduct = () => {
        addProduct(product.id, products);
    }

    const handleRmvProduct = () => {
        rmvProduct(product.id)
    }

    const currentProductInCart = state.products.find(productInCart => productInCart.id === product.id);

    return (
        <Grid container justifyContent="center">
            <CardPaper elevation={3}>
                <CardContainer
                    container
                    direction="column"
                    spacing={2} alignItems="center"
                    justifyContent="space-between"
                    flexWrap="nowrap"
                >
                    <Grid item>
                        <ImageBox>
                            <img src={product.imgSrc} alt="product-img" />
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
                            addProduct={handleAddProduct}
                            rmvProduct={handleRmvProduct}
                            currentAmount={currentProductInCart?.requestAmount || 0}
                        />
                    </Grid>
                </CardContainer>
            </CardPaper>
        </Grid>
    );
}

export default ProductCard;