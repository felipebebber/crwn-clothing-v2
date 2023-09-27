import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';

import { ProductCardContainer } from './product-card.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    
    const { addItemTocart } = useContext(CartContext);

    const handleAddToCart = () => addItemTocart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button styleType='inverted' onClick={handleAddToCart}>ADD TO CART</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;