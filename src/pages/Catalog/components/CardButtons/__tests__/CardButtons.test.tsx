import {render, screen, waitFor} from "@testing-library/react";
import CardButtons from "../CardButtons";
import userEvent from "@testing-library/user-event";
import {useCart} from "../../../../../contexts/cart/useCart";
import {CartProvider, useCartContext} from "../../../../../contexts/cart/context";

interface Props {
    currentAmount: number,
    availableAmount: number,
    addProduct: () => void,
    rmvProduct: () => void,
}

const defaultProps: Props = {
    currentAmount: 0,
    availableAmount: 10,
    addProduct: jest.fn(),
    rmvProduct: jest.fn()
};

const CardButtonsWrapper = (props?: Partial<Props>) => {
    const value = useCart();
    return (<CartProvider value={value}>
        <CardButtons
            {...defaultProps}
            {...props}
        />
    </CartProvider>)
}

const renderButtonsWith = (props?: Partial<Props>) => render(<CardButtonsWrapper {...props}/>);

describe("CardButtons", () => {
    it('render elements correctly', () => {
        renderButtonsWith({currentAmount: 10});

        const addButton = screen.getByRole('button', {
            name: 'button-add'
        });
        const removeButton = screen.getByRole('button', {
            name: 'button-rmv'
        });
        const currentAmount = screen.getByTestId('current-amount');

        expect(addButton).toBeInTheDocument();
        expect(removeButton).toBeInTheDocument();

        expect(currentAmount).toHaveTextContent(/10/i);
    });
    it('call addProduct when clicks on add button', async () => {
        renderButtonsWith();

        const addButton = screen.getByRole('button', {
            name: 'button-add'
        });

        await userEvent.click(addButton);

        await waitFor(() => expect(defaultProps.addProduct).toHaveBeenCalled());
    })
    it('call rmvProduct when clicks on rmv button', async () => {
        renderButtonsWith({currentAmount: 2});

        const rmvButton = screen.getByRole('button', {
            name: 'button-rmv'
        });

        await userEvent.click(rmvButton);

        await waitFor(() => expect(defaultProps.rmvProduct).toHaveBeenCalled());
    })
})