import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { useNavigate } from "react-router-dom";

import Button from '../button/button.component';

import { CartDopdownContainer, CartItems } from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { items } = useContext(CartContext);

    const navigate = useNavigate();
    
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDopdownContainer>
            <CartItems>
                {items.length > 0 ? 
                    items.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )) : <div className='empty-message'>Your cart is empty</div>
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDopdownContainer>
    )
}

export default CartDropdown;