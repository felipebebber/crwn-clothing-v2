import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import './cart-icon.styles.scss';

const CartIcon = () => {

    const { open, setOpen, items } = useContext(CartContext);
    
    const handleCartOpen = () => {
        setOpen(!open);
    }

    const itemsCount = items.reduce((total, cartItem) => total + cartItem.qty, 0);

    return (
        <div className='cart-icon-container' onClick={handleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}

export default CartIcon;