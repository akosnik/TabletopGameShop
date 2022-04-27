import { Container } from "react-bootstrap";
import { CartState } from "../../Data/Context";

const CartList = () => {
  let { cartState: { cart } } = CartState();

  return(
    <Container>
    { 
      
      cart.map((p) => {
        return (<p key={p.title}>{p.title}</p>)
      })
    }
    </Container>
  )
}

export default CartList;