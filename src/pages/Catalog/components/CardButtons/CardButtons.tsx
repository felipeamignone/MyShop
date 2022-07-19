import Grid from "@mui/material/Grid";
import {StyledAddIcon, StyledRemoveIcon} from "./CardButtons.styles";
import IconButton from "@mui/material/IconButton";

interface Props {
    maxAmount: number,
    onAddClick: () => void,
    onRemoveClick: () => void,
}

const CardButtons = ({maxAmount, onAddClick, onRemoveClick}: Props) => (
    <Grid container wrap="nowrap" justifyContent="center" alignItems="baseline" spacing={2}>
        <Grid item>
            <IconButton onClick={onRemoveClick}>
                <StyledRemoveIcon color="secondary"/>
            </IconButton>
        </Grid>
        <Grid item>amount</Grid>
        <Grid item>
            <IconButton size="large" onClick={onAddClick}>
                <StyledAddIcon color="primary"/>
            </IconButton>
        </Grid>
    </Grid>
)

export default CardButtons;