import { createContext, useState } from "react";

export const CartContext = createContext({});

const addCartItem = (items, productToAdd) => {
    const index = items.findIndex(x => x.id === productToAdd.id); 
    
    if (index === -1) {
        productToAdd.qty = 1;
        items.push(productToAdd);
    } else {
        items[index].qty += 1;
    }
    
    return [...items];
}

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);

    const addItemTocart = (productToAdd) => {
        setItems(addCartItem(items, productToAdd));
    }

    return (
        <CartContext.Provider value={{items, addItemTocart, open, setOpen}}>{children}</CartContext.Provider>
    )
}

