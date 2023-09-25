import './product-card.styles.scss';
import Button from '../button/button.component';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
    const { name, id, price, imageUrl} = product;
    
    const { items, setItems } = useContext(CartContext);

    const handleAddToCart = () => {
        items.push(product);
        setItems(items);
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type="button" styleType='inverted' onClick={handleAddToCart}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard;