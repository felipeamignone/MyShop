import {useContext, createContext} from 'react';
import useCart from './useCart';

const CartContext = createContext(useCart);

export const CartProvider = CartContext.Provider;

export const useCartProvider = () => {
    const useCart = useContext(CartContext);
    return useCart;
}