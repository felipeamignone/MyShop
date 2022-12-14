import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const PageContainer = styled(Grid)({
    padding: '34px 68px',
});

export const CardContainer = styled(Grid)({
    height: '100%',
});

export const CardPaper = styled(Paper)({
    width: '250px',
    height: '445px',
    padding: '8px',
});

export const ImageBox = styled(Box)({
    '& > img': {
        maxWidth: '200px',
        height: '200px',
    },
    backgroundColor: '#f5f5f5'
});