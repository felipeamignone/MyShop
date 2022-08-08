import {useContext, createContext} from 'react';
import useCatalog from './useCatalog';

const catalogContext = createContext(useCatalog);

export const CatalogProvider = catalogContext.Provider;

export const useCatalogProvider = () => {
    const useCatalog = useContext(catalogContext);
    return useCatalog;
}