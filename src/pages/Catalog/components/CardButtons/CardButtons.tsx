import { StyledAddIcon, StyledRemoveIcon } from "./CardButtons.styles";
import ContainedButton from "../../../../components/ContainedButton/ContainedButton";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  currentAmount: number;
  availableAmount: number;
  addProduct: () => void;
  rmvProduct: () => void;
  disabledRmv?: boolean;
}

const CardButtons = ({
  currentAmount,
  availableAmount,
  addProduct,
  rmvProduct,
  disabledRmv,
}: Props) => {
  const handleCurrentAmount = (typeAction: "add" | "rmv") => {
    if (typeAction === "add") {
      addProduct();
    } else if (typeAction === "rmv") {
      rmvProduct();
    }
  };

  if (currentAmount === 0)
    return (
      <Grid
        container
        wrap="nowrap"
        justifyContent="center"
        alignItems="baseline"
        spacing={2}
      >
        <Grid item>
          <ContainedButton
            onClick={() => handleCurrentAmount("add")}
            aria-label="button-add"
          >
            ADICIONAR AO CARRINHO
          </ContainedButton>
        </Grid>
      </Grid>
    );

  return (
    <Grid
      container
      wrap="nowrap"
      justifyContent="center"
      alignItems="baseline"
      spacing={2}
    >
      <Grid item>
        <Tooltip title="Remover item do carrinho">
          <IconButton
            onClick={() => handleCurrentAmount("rmv")}
            aria-label="button-rmv"
            disabled={disabledRmv}
          >
            <StyledRemoveIcon color="secondary" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          data-testid="current-amount"
          minWidth={20}
          align="center"
        >
          {currentAmount}
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip
          title={
            currentAmount === availableAmount
              ? "Sem produtos restantes no estoque"
              : "Adicionar item ao carrinho"
          }
        >
          <span>
            <IconButton
              onClick={() => handleCurrentAmount("add")}
              aria-label="button-add"
              disabled={currentAmount === availableAmount}
            >
              <StyledAddIcon color="primary" />
            </IconButton>
          </span>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default CardButtons;
