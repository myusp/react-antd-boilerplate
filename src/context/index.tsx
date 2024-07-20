import { createContext, ReactNode, useContext } from "react";
import { AppContextType } from "../types";

export const Context = createContext<AppContextType | null>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    return <Context.Provider
        value={null}
    >
        {children}
    </Context.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const ctx = useContext(Context)
    if (!ctx) {
        throw new Error("invalid usage useAppContext");
    }
    return ctx
}