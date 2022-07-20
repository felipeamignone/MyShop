import {ReactNode} from "react";
import Button, {ButtonProps} from "@mui/material/Button";

export interface IContainedButton extends ButtonProps {
    children: ReactNode
};

const ContainedButton = ({children, ...props}: IContainedButton) =>
    <Button {...props} variant="contained">
        {children}
    </Button>
;

export default ContainedButton;
