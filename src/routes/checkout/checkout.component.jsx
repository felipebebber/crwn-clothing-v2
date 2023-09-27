import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, CheckoutHeader, CheckoutTotal, CheckoutHeaderBlock } from "./checkout.styles";

const Checkout = () => {
  const { items, totalPrice, setOpen } = useContext(CartContext);
  
  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Name</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span></span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {
        items.map(item => {
          return (
            <CheckoutItem key={item.id} item={item} />
          )
        })
      }
      <CheckoutTotal>Total: ${totalPrice}</CheckoutTotal>
    </CheckoutContainer>
    </>
  )
}

export default Checkout;