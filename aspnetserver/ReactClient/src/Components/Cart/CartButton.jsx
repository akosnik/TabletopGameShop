import React from 'react';
import { Button } from "react-bootstrap";
import { CartState } from "../../Data/Context";


function CartButton() {

  let { cartState: { cart } } = CartState();

  return (
    <Button>Cart { cart.length > 0 && ("(" + cart.length + ")") }</Button>
  )
}

export default CartButton;