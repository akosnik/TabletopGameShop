import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CartState } from "../../Data/Context";

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
    { 
      cart.map((p) => <p key={p.title}>{p.title}</p>)
    }
    <p>Total: ${cartTotal}</p>
    </Container>
  )
}

export default Cart;