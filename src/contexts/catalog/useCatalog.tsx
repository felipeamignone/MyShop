import {useState,} from "react";
import {IProduct} from "../../pages/Catalog/types";
import {ProductMock} from "../../mocks/ProductMock";


interface ICatalogState {
    madeInitialFetch: boolean;
    products: IProduct[]
}

const initialState: ICatalogState = {
    madeInitialFetch: false,
    products: ProductMock
}

export const useCatalog = () => {
    const [state, setState] = useState<ICatalogState>(initialState);

    const handleState = (changes: Partial<ICatalogState>) => setState({...state, ...changes});


    return ({
        state,
        handleState,
    })
}