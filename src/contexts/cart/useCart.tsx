import { useState } from "react";
import { ICartState } from "./types";
import { IProduct } from "../../pages/Catalog/types";

const initialState: ICartState = {
  products: [],
  personalData: {
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    cpf: null,
  },
  address: {
    streetName: "",
    residenceNumber: null,
    residenceComplement: "",
    city: "",
    uf: "",
    cep: null,
  },
  payment: {
    methodId: null,
    paymentData: null,
  },
};

export const useCart = () => {
  const [state, setState] = useState<ICartState>(initialState);

  const handleState = (changes: Partial<ICartState>) =>
    setState((prevState) => ({ ...prevState, ...changes }));

  const addProduct = (productId: number, catalogProducts: IProduct[]) => {
    const catalogProduct = catalogProducts.find(
      (catalogProduct) => catalogProduct.id === productId
    );
    const cartProduct = state.products.find(
      (cartProduct) => cartProduct.id === productId
    );

    if (catalogProduct) {
      if (!cartProduct) {
        handleState({
          products: [...state.products, { ...catalogProduct, requestAmount: 1 }],
        });
      } else if (cartProduct.requestAmount < catalogProduct.availableAmount) {
        let newProducts = [...state.products];

        const productIndexInCart = state.products.findIndex(
          (cartProduct) => cartProduct.id === productId
        );

        newProducts[productIndexInCart] = {
          ...cartProduct,
          requestAmount: cartProduct.requestAmount + 1,
        };

        handleState({ products: [...newProducts] });
      }
    }
  };

  const rmvProduct = (productId: number) => {
    const cartProduct = state.products.find(
      (cartProduct) => cartProduct.id === productId
    );

    if (cartProduct && cartProduct.requestAmount >= 1) {
      if (cartProduct.requestAmount === 1) {
        let newProducts = [...state.products];

        const productIndexInCart = state.products.findIndex(
          (cartProduct) => cartProduct.id === productId
        );

        newProducts.splice(productIndexInCart, 1);

        handleState({ products: [...newProducts] });
      } else {
        let newProducts = [...state.products];

        const productIndexInCart = state.products.findIndex(
          (cartProduct) => cartProduct.id === productId
        );

        newProducts[productIndexInCart] = {
          ...cartProduct,
          requestAmount: cartProduct.requestAmount - 1,
        };

        handleState({ products: [...newProducts] });
      }
    }
  };

  const removeAllProductAmount = (productId: number) => {
    const cartProduct = state.products.find(
      (cartProduct) => cartProduct.id === productId
    );

    if (cartProduct) {
      let newProducts = [...state.products];

      const productIndexInCart = state.products.findIndex(
        (cartProduct) => cartProduct.id === productId
      );

      newProducts.splice(productIndexInCart, 1);

      handleState({ products: [...newProducts] });
    }
  }

  return {
    state,
    handleState,
    addProduct,
    rmvProduct,
    removeAllProductAmount,
  };
};
