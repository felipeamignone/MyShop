import { useCallback, useEffect, useState, } from "react";
import { IProduct } from "../../pages/Catalog/types";

interface IFakeStoreProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

interface ICatalogState {
    madeInitialFetch: boolean;
    products: IProduct[]
}

const initialState: ICatalogState = {
    madeInitialFetch: false,
    products: [],
}

export const useCatalog = () => {
    const [state, setState] = useState<ICatalogState>(initialState);

    const handleState = useCallback((changes: Partial<ICatalogState>) =>
        setState((oldState) => ({ ...oldState, ...changes })), []);

    const fetchCatalog = useCallback(async () => {
        try {
            const res: IFakeStoreProduct[] = await fetch('https://fakestoreapi.com/products')
                .then(res => res.json());

            let newProductsArray: IProduct[] = [];

            res.forEach(product => {
                const newProduct: IProduct = {
                    id: product.id,
                    name: product.title,
                    price: Number(product.price),
                    imgSrc: product.image,
                    availableAmount: Math.floor(Math.random() * 30) + 1
                }

                newProductsArray.push(newProduct);
            })

            handleState({ products: [...newProductsArray] })
        }
        catch (error) { console.log(error) }
        finally {
            handleState({ madeInitialFetch: true })
        }
    }, [handleState])

    useEffect(() => {
        if (!state.madeInitialFetch) {
            fetchCatalog();
        }
    }, [fetchCatalog, state.madeInitialFetch])

    return ({
        state,
        handleState,
    })
}