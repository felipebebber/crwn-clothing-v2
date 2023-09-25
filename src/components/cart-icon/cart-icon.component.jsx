import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import './cart-icon.styles.scss';

const CartIcon = () => {

    const { open, setOpen } = useContext(CartContext);
    
    const handleCartOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='cart-icon-container' onClick={handleCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;