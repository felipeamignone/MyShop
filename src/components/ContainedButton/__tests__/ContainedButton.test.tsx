import {render, screen} from "@testing-library/react";
import ContainedButton, {IContainedButton} from "../ContainedButton";
import {StyledHomeIcon} from "../../Header/Header.styled";

const renderButton = ({children, ...props}: IContainedButton) => render(
    <ContainedButton {...props}>{children}</ContainedButton>)

describe('ContainedButton', () => {
    it('render button with a text as children', () => {
        renderButton({children: 'texto'});

        const buttonText = screen.getByText('texto');
        expect(buttonText).toBeInTheDocument();
    })
    it('render button with a icon as children', () => {
        renderButton({children: <StyledHomeIcon/>});

        const homeIcon = screen.getByTestId(/homeicon/i);
        expect(homeIcon).toBeInTheDocument();
    })

})