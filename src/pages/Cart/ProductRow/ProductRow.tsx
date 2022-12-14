import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import { IProductsInCart } from "../../../contexts/cart/types";
import { useCartContext } from "../../../contexts/cart/context";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface Props {
    product: IProductsInCart;
}

const ProductRow = ({ product }: Props) => {
    const { removeAllProductAmount } = useCartContext();
    return (
        <TableRow key={product.id}>
            <TableCell align="left">
                <Typography variant="body2">
                    {product.name}
                </Typography>
            </TableCell>
            <TableCell align="left">
                <Typography variant="body2">
                    {product.requestAmount}
                </Typography>
            </TableCell>
            <TableCell align="left">
                <Typography variant="body2">
                    R$ {product.price}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Tooltip title="Remover item do carrinho">
                    <IconButton onClick={() => removeAllProductAmount(product.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    )
};

export default ProductRow;