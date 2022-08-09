import {createContext, useContext} from "react";
import {useCart} from "./useCart";

const CartContext = createContext<ReturnType<typeof useCart> | undefined>(undefined);
export const CartProvider = CartContext.Provider;

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('use useCartContext inside a CartProvider');
    }
    return context;
}