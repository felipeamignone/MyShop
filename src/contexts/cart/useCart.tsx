import {useState} from "react";
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

    const addProduct = (newProduct: IProductsInCart) => {

        const hasProductInCart = state.products.includes(newProduct);

        if (!hasProductInCart) {
            handleState({products: [...state.products, newProduct]});
        } else {
            const productIndex = state.products.findIndex(product => product.id === newProduct.id)

            let auxArray = [...state.products];
            auxArray[productIndex] = {...newProduct}

            handleState({products: [...auxArray]});
        }
    }

    return ({
        state,
        handleState,
        addProduct
    })
}

const wrapper = {
    initialState,
    useCart,
}

export default wrapper