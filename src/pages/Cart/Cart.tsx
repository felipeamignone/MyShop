import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useCartContext } from "../../contexts/cart/context";
import ProductRow from "./ProductRow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const {
    state: { products },
  } = useCartContext();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      marginTop={4}
    >
      <Box width="60%">
        <Typography variant="h6">Resumo do pedido:</Typography>
        <TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={700}>
                    Nome do Produto
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2" fontWeight={700}>
                    Quantidade
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={700}>
                    Preço
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <ProductRow product={product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Cart;
