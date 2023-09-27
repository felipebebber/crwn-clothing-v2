import { CartItemContainer, CartItemImg, CartItemDetails, CartItemName, CartItemPrice } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    // const { items } = useContext(CartContext);
    const { name, qty, price, imageUrl } = cartItem;

    return (
        <CartItemContainer>
            <CartItemImg src={imageUrl} alt={name} />
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice>{qty}x ${price}</CartItemPrice>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;