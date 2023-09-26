import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';

const Checkout = () => {
  const { items, totalPrice, setOpen } = useContext(CartContext);
  
  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <>
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span></span>
        </div>
      </div>
      {
        items.map(item => {
          return (
            <CheckoutItem key={item.id} item={item} />
          )
        })
      }
      <div className="total">Total: ${totalPrice}</div>
    </div>
    </>
  )
}

export default Checkout;