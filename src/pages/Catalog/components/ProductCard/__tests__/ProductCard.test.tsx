import {render, screen} from "@testing-library/react";
import ProductCard from "../ProductCard";
import {IProduct} from "../../../types";

interface Props {
    product: IProduct
}

const defaultProps: Props = {
    product: {
        id: 1,
        name: 'Product 1',
        price: 14.99,
        imgSrc: '',
        availableAmount: 15,
        selectedAmount: 0,
    }
}

const renderCard = (props?: Partial<Props>) => render(<ProductCard {...defaultProps} {...props}/>);

describe("ProductCard", () => {
    it('render elements correctly', () => {
        renderCard();

        const productImg = screen.getByRole('img');
        const productName = screen.getByText(defaultProps.product.name);
        const productPrice = screen.getByText('R$ 14,99');

        expect(productImg).toBeInTheDocument();
        expect(productName).toBeInTheDocument();
        expect(productPrice).toBeInTheDocument();
    })
})