import {useState} from "react";
import {StyledAddIcon, StyledRemoveIcon} from "./CardButtons.styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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

    return (
        <Grid container wrap="nowrap" justifyContent="center" alignItems="baseline" spacing={2}>
            <Grid item>
                <IconButton onClick={() => handleCurrentAmount('rmv')}>
                    <StyledRemoveIcon color="secondary"/>
                </IconButton>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {currentAmount}
                </Typography>
            </Grid>
            <Grid item>
                <IconButton size="large" onClick={() => handleCurrentAmount('add')}>
                    <StyledAddIcon color="primary"/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default CardButtons;