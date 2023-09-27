import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { CartShoppingIcon, CartItemCount, CartIconContainer } from './cart-icon.styles';

const CartIcon = () => {

    const { open, setOpen, items } = useContext(CartContext);
    
    const handleCartOpen = () => {
        setOpen(!open);
    }

    const itemsCount = items.reduce((total, cartItem) => total + cartItem.qty, 0);

    return (
        <CartIconContainer onClick={handleCartOpen}>
            <CartShoppingIcon />
            <CartItemCount>{itemsCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;