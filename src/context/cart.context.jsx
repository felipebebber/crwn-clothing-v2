import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const getIndex = (items, item) => items.findIndex(x => x.id === item.id);  

const addCartItem = (items, item) => {
    const index = getIndex(items, item); 
    
    if (index === -1) {
        item.qty = 1;
        items.push(item);
    } else {
        items[index].qty += 1;
    }
    
    return [...items];
}

const controlQtyItem = (items, item, type) => {
    const index = getIndex(items, item); 

    if (type === "plus") {
        items[index].qty += 1;
    } else if (type === "minus" && items[index].qty > 1) {
        items[index].qty -= 1;
    }

    return [...items];
}

const removeItem = (items, item) => {
    return items.filter((cartItem) => cartItem.id !== item.id);
}

const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + (item.qty * item.price), 0)
}

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemTocart = (item) => {
        setItems(addCartItem(items, item));
    }
    
    const controlQtyItemCart = (item, type) => {
        setItems(controlQtyItem(items, item, type));
    }

    const removeItemCart = (item) => {
        setItems(removeItem(items, item));
    }

    useEffect(() => {
        setTotalPrice(calculateTotalPrice(items));
    }, [items]);

    const value = {
        items, totalPrice, addItemTocart, controlQtyItemCart, removeItemCart, open, setOpen
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

