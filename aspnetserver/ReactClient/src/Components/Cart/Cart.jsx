import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CartState } from "../../Data/Context";
import CartItem from "./CartItem";

const Cart = () => {
  let { cartState: { cart } } = CartState();
  const [cartTotal, setCartTotal] = useState(0.00);
  const [quantityPrice, setQuantityPrice] = useState()

  const getCartTotal = () => {
    let total = 0;
    cart.forEach((p) => total += (p.price * p.quantity))
    total = (Math.round((total + Number.EPSILON) * 100) / 100).toFixed(2)
    setCartTotal(total);
  }

  const getQuantityPrice = (quantity, price) => {
    return (quantity * Math.round((price + Number.EPSILON) * 100) / 100).toFixed(2)
  }

  useEffect(() => {
    getCartTotal();
  }, [ cart ])

  return(
    <Container>
      <p>Total: ${cartTotal}</p>
      { 
        cart.map((p) => 
        <CartItem 
          key={p.title} 
          product={ p }
          quantityPrice={ getQuantityPrice(p.quantity, p.price) }
        >
          {p.title}
        </CartItem>)
      }
    </Container>
  )
}

export default Cart;