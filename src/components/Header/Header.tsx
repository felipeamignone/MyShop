import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

const Header = () => (
    <AppBar position="static">
        <Toolbar variant="dense" sx={{padding: 1}}>
            <Grid container justifyContent="space-between" wrap="nowrap" alignItems="center">
                <Grid container item spacing={2} alignItems="center">
                    <Grid item>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <HomeIcon sx={{fontSize: 40}}/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">My Shop</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ShoppingCartIcon sx={{fontSize: 40}}/>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
);

export default Header;