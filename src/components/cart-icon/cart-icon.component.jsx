import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import { useContext } from "react";
import { CartOpenContext } from "../../context/cart-open";

import './cart-icon.styles.scss';

const CartIcon = ({ cartOpen, setCartOpen }) => {

    const { open, setOpen } = useContext(CartOpenContext);
    
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