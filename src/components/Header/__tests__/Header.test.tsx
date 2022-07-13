import Header from '../Header';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen} from "@testing-library/react";

const renderHeader = () => render(<Router><Header/></Router>);
describe("Header", () => {
    it('render Header title', () => {
        renderHeader();

        const title = screen.getByRole('heading', {
            name: /my shop/i
        });
        expect(title).toBeInTheDocument();
    });
    it('render Home icon', () => {
        renderHeader();

        const homeIcon = screen.getByTestId(/homeicon/i);
        expect(homeIcon).toBeInTheDocument();
    });
    it('render Cart icon', () => {
        renderHeader();

        const cartIcon = screen.getByTestId(/shoppingcarticon/i);
        expect(cartIcon).toBeInTheDocument();
    });
})
