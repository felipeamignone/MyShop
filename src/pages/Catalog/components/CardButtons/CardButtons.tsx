import {StyledAddIcon, StyledRemoveIcon} from "./CardButtons.styles";
import ContainedButton from "../../../../components/ContainedButton/ContainedButton";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {useCartProvider} from "../../../../contexts/cart/context";
import {IProductsInCart} from "../../../../contexts/cart/types";

interface Props {
    product: IProductsInCart,
    availableAmount: number,
}

const CardButtons = ({availableAmount, product}: Props) => {
    //TODO: Após desenvolver o contexto do carrinho, passar os métodos para as propos onAddClick e onRemoveClick para o
    //      handleCurrentAmount e remover o state local. Criar um hook personalizado para manipular esse contexto.
    const {useCart} = useCartProvider();
    const {addProduct, state} = useCart();

    const handleCurrentAmount = (typeAction: 'add' | 'rmv') => {
        if (typeAction === 'add') {
            // setCurrentAmount(currentAmount + 1)
            addProduct(product);
        } else if (typeAction === 'rmv') {
            // setCurrentAmount(currentAmount - 1)
        }
    }

    if (product.requestAmount === 0) return (
        <Grid container wrap="nowrap" justifyContent="center" alignItems="baseline" spacing={2}>
            <Grid item>
                <ContainedButton onClick={() => handleCurrentAmount('add')} aria-label="button-add">
                    ADICIONAR AO CARRINHO
                </ContainedButton>
            </Grid>
        </Grid>
    )

    return (
        <Grid container wrap="nowrap" justifyContent="center" alignItems="baseline" spacing={2}>
            <Grid item>
                <Tooltip title="Remover item do carrinho">
                    <IconButton onClick={() => handleCurrentAmount('rmv')} aria-label="button-rmv">
                        <StyledRemoveIcon color="secondary"/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item>
                <Typography variant="body1" data-testid="current-amount">
                    {state.products[0].requestAmount}
                </Typography>
            </Grid>
            <Grid item>
                <Tooltip
                    title={product.requestAmount === availableAmount ? 'Sem produtos restantes no estoque' : 'Adicionar item ao carrinho'}>
                    <IconButton
                        size="large"
                        onClick={() => handleCurrentAmount('add')}
                        aria-label="button-add"
                    >
                        <StyledAddIcon color="primary"/>
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default CardButtons;