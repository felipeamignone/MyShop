import {Link} from "react-router-dom";
import {styled} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
})

export const StyledHomeIcon = styled(HomeIcon)({
    fontSize: 40,
})

export const StyledCartIcon = styled(ShoppingCartIcon)({
    fontSize: 40,
})

export const StyledToolbar = styled(Toolbar)({
    padding: 8,
})