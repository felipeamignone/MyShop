import { createContext, useContext } from "react";
import { useCatalog } from "./useCatalog";

const CatalogContext = createContext<ReturnType<typeof useCatalog> | undefined>(undefined);
export const CatalogProvider = CatalogContext.Provider;

export const useCatalogContext = () => {
    const context = useContext(CatalogContext);
    if (context === undefined) {
        throw new Error('use useCatalogContext inside a CatalogProvider');
    }
    return context;
}