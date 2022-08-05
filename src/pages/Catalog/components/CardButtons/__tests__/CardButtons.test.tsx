import {render, screen, waitFor} from "@testing-library/react";
import CardButtons from "../CardButtons";
import userEvent from "@testing-library/user-event";

interface Props {
    selectedAmount: number,
    availableAmount: number,
}

const defaultProps: Props = {selectedAmount: 0, availableAmount: 10};

const renderButtonsWith = (props?: Partial<Props>) => render(<CardButtons {...defaultProps} {...props}/>);

describe("CardButtons", () => {
    it('render elements correctly', () => {
        renderButtonsWith({selectedAmount: 10});

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
    it('increment current amount when clicks on add button', async () => {
        renderButtonsWith();

        const addButton = screen.getByRole('button', {
            name: 'button-add'
        });

        await userEvent.click(addButton);

        const currentAmount = screen.getByTestId('current-amount');

        await waitFor(() => expect(currentAmount).toHaveTextContent(/1/i));
    })
    it('dont increment current amount when clicks on add button and current is equal to available', async () => {
        renderButtonsWith({selectedAmount: 10, availableAmount: 11});

        const addButton = screen.getByRole('button', {
            name: 'button-add'
        });

        await userEvent.click(addButton);

        const currentAmount = screen.getByTestId('current-amount');

        await waitFor(() => expect(currentAmount).toHaveTextContent(/11/i));

        await userEvent.click(addButton);

        await waitFor(() => expect(currentAmount).not.toHaveTextContent(/12/i));
    })
    it('decrement current amount when clicks on rmv button', async () => {
        renderButtonsWith({selectedAmount: 2});

        const rmvButton = screen.getByRole('button', {
            name: 'button-rmv'
        });

        await userEvent.click(rmvButton);

        const currentAmount = screen.getByTestId('current-amount');

        await waitFor(() => expect(currentAmount).toHaveTextContent(/1/i));
    })
    it('decrement current amount when clicks on rmv button and dismount button when amount is equal 0',
        async () => {
            renderButtonsWith({selectedAmount: 2});

            const rmvButton = screen.getByRole('button', {
                name: 'button-rmv'
            });

            await userEvent.click(rmvButton);

            const currentAmount = screen.getByTestId('current-amount');

            await waitFor(() => expect(currentAmount).toHaveTextContent(/1/i));

            await userEvent.click(rmvButton);

            await waitFor(() => expect(currentAmount).not.toBeInTheDocument());
        })
})