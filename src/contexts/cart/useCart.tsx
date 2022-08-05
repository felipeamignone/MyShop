import {useState, useEffect} from "react";
import {ICartState, IProductsInCart} from "./types";

const initialState: ICartState = {
    products: [],
    personalData: {
        firstName: '',
        secondName: '',
        phone: '',
        email: '',
        cpf: null
    },
    address: {
        streetName: '',
        residenceNumber: '',
        residenceComplement: '',
        city: '',
        uf: '',
        cep: null
    },
    payment: {
        methodId: null,
        paymentData: null
    }
}

const useCart = () => {
    const [state, setState] = useState<ICartState>(initialState);

    const handleState = (changes: Partial<ICartState>) => setState({...state, ...changes});
}

export default {
    initialState,
    useCart,
}