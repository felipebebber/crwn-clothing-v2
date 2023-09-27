import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { CheckoutItemContainer } from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
    const { controlQtyItemCart, removeItemCart } = useContext(CartContext);
    const { name, imageUrl, qty, price } = item;

    const handleQtyPlus = () => {
        controlQtyItemCart(item, 'plus');
    }

    const handleQtyMinus = () => {  
        controlQtyItemCart(item, 'minus');
    }

    const handleRemoveItem = () => {
        removeItemCart(item)
    }
        
    return (
        <CheckoutItemContainer>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>

            <span className="name">
                {name}
            </span>

            <span className="quantity">
                <button className="arrow" onClick={handleQtyMinus}>&#10094;</button>
                <div className="value">{qty}</div>
                <button className="arrow" onClick={handleQtyPlus}>&#10095;</button>
            </span>

            <span className="price">${price}</span>

            <button className="remove-button" onClick={handleRemoveItem}>&#10005;</button>
        </CheckoutItemContainer>

    )
}

export default CheckoutItem;