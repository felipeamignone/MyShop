import { IProduct } from "../../pages/Catalog/types";

export interface IProductsInCart extends IProduct {
    requestAmount: number;
}

interface ITicketPaymentMethod {
    firstNamePayer: string;
    secondNamePayer: string;
    cpfPayer: number | null;
}

interface ICardPaymentMethod {
    nameInCard: string;
    numberCard: number | null;
    validateCard: Date;
    securityCode: number | null;
    cpfPayer: number | null;
}

export interface ICartState {
    products: IProductsInCart[];
    personalData: {
        firstName: string;
        secondName: string;
        phone: string;  // validate phone in string is easier than in number
        email: string;
        cpf: number | null;
    };
    address: {
        streetName: string;
        residenceNumber: number | null;
        residenceComplement: string;
        city: string;
        uf: string;
        cep: number | null;
    };
    payment: {
        methodId: number | null;
        paymentData: ITicketPaymentMethod | ICardPaymentMethod | null
    }
}