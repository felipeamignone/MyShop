import {useState} from "react";
import {StyledAddIcon, StyledRemoveIcon} from "./CardButtons.styles";
import ContainedButton from "../../../../components/ContainedButton/ContainedButton";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface Props {
    selectedAmount: number,
    availableAmount: number,
}

const CardButtons = ({availableAmount, selectedAmount}: Props) => {
    //TODO: Após desenvolver o contexto do carrinho, passar os métodos para as propos onAddClick e onRemoveClick para o
    //      handleCurrentAmount e remover o state local. Criar um hook personalizado para manipular esse contexto.
    const [currentAmount, setCurrentAmount] = useState<number>(selectedAmount);

    const handleCurrentAmount = (typeAction: 'add' | 'rmv') => {
        if (typeAction === 'add' && currentAmount < availableAmount) {
            setCurrentAmount(currentAmount + 1)
        } else if (typeAction === 'rmv' && currentAmount) {
            setCurrentAmount(currentAmount - 1)
        }
    }

    if (currentAmount === 0) return (
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
                    {currentAmount}
                </Typography>
            </Grid>
            <Grid item>
                <Tooltip
                    title={currentAmount === availableAmount ? 'Sem produtos restantes no estoque' : 'Adicionar item ao carrinho'}>
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