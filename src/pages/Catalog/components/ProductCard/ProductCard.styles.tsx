import {Box, Grid, Paper, styled} from "@mui/material";

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
    width: '200px',
    height: '200px',
    backgroundColor: '#f5f5f5'
});