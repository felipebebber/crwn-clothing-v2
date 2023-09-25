import './cart-dropdown.styles.scss';

import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
    const { items } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;