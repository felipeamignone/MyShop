import {StyledCartIcon, StyledHomeIcon, StyledLink, StyledToolbar} from "./Header.styled";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Header = () => (
    <AppBar position="static">
        <StyledToolbar variant="dense">
            <Grid container justifyContent="space-between" wrap="nowrap" alignItems="center">
                <Grid container item spacing={2} alignItems="center">
                    <Grid item>
                        <StyledLink to="/">
                            <StyledHomeIcon/>
                        </StyledLink>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">My Shop</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <StyledLink to="/cart">
                        <StyledCartIcon/>
                    </StyledLink>
                </Grid>
            </Grid>
        </StyledToolbar>
    </AppBar>
);

export default Header;