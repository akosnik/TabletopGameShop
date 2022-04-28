import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CartState } from "../../Data/Context";
import CartItem from "./CartItem";

const Cart = () => {
  let { cartState: { cart } } = CartState();
  const [cartTotal, setCartTotal] = useState(0.00);

  useEffect(() => {
    getCartTotal();
  }, [ cart ])

  const getCartTotal = () => {
    let total = 0;
    cart.forEach((p) => total += p.price)
    setCartTotal(total);
  }


  return(
    <Container>
      <p>Total: ${cartTotal}</p>
      { 
        cart.map((p) => 
        <CartItem 
          key={p.title} 
          product={ p }
        >
          {p.title}
        </CartItem>)
      }
    
    </Container>
  )
}

export default Cart;