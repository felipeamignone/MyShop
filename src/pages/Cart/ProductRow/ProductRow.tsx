import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import { IProductsInCart } from "../../../contexts/cart/types";
import { useCartContext } from "../../../contexts/cart/context";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useCatalogContext } from "../../../contexts/catalog/context";
import CardButtons from "../../Catalog/components/CardButtons";
import { formatPriceToLocaleString } from "../../../utils";

interface Props {
  product: IProductsInCart;
}

const ProductRow = ({ product }: Props) => {
  const { removeAllProductAmount, addProduct, rmvProduct } = useCartContext();
  const {
    state: { products },
  } = useCatalogContext();

  const handleAddProduct = () => {
    addProduct(product.id, products);
  };

  const handleRmvProduct = () => {
    if (product.requestAmount > 1) {
      rmvProduct(product.id);
    }
  };

  return (
    <TableRow key={product.id}>
      <TableCell align="left">
        <Typography variant="body2">{product.name}</Typography>
      </TableCell>
      <TableCell>
        <CardButtons
          availableAmount={product.availableAmount}
          addProduct={handleAddProduct}
          rmvProduct={handleRmvProduct}
          currentAmount={product.requestAmount || 0}
          disabledRmv={!(product.requestAmount > 1)}
        />
      </TableCell>
      <TableCell align="left" sx={{ minWidth: 70 }}>
        <Typography variant="body2">
          {formatPriceToLocaleString(product.price)}
        </Typography>
      </TableCell>
      <TableCell align="right" sx={{ maxWidth: 40 }}>
        <Tooltip title="Remover item do carrinho">
          <IconButton onClick={() => removeAllProductAmount(product.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
