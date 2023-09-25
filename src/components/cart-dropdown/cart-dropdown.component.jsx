import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './cart-dropdown.styles.scss';
import Button from '../button/button.component';


const CartDropdown = () => {
    const { items } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {items.length > 0 ? 
                    items.map((item) => (
                        <div key={item.id}>
                            {item.qty}x {item.name}
                        </div>
                    )) : <div className='empty-message'>Your cart is empty</div>
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;