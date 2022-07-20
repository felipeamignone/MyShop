import Header from '../Header';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen} from "@testing-library/react";

const renderHeader = () => render(<Router><Header/></Router>);
describe("Header", () => {
    it('render elements correctly', () => {
        renderHeader();

        const title = screen.getByRole('heading', {
            name: /my shop/i
        });

        const homeIcon = screen.getByTestId(/homeicon/i);
        const cartIcon = screen.getByTestId(/shoppingcarticon/i);
        expect(title).toBeInTheDocument();
        expect(homeIcon).toBeInTheDocument();
        expect(cartIcon).toBeInTheDocument();
    });
})
