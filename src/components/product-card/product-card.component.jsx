import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    
    const { addItemTocart } = useContext(CartContext);

    const handleAddToCart = () => addItemTocart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button styleType='inverted' onClick={handleAddToCart}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard;