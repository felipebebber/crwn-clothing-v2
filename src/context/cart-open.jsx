import { createContext, useState } from "react";

export const CartOpenContext = createContext({});

export const CartOpenProvider = ({children}) => {
    const [open, setOpen] = useState(false);

    return (
        <CartOpenContext.Provider value={{open, setOpen}}>{children}</CartOpenContext.Provider>
    )
}

