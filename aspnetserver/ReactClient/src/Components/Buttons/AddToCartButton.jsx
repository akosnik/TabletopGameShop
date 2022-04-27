import { CartState } from '../../Data/Context';
import { Button } from 'react-bootstrap';

function AddToCartButton({ props }) {

  const { id, inventory } = props;

  let { cartState: { cart }, cartDispatch } = CartState();

  const handleClick = () => {
    
    if(cart.some((p) => p.id === id)) {
      console.log("Remove")
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: props
      })
    } else {
      console.log("Add")
      cartDispatch({
        type: "ADD_TO_CART",
        payload: props
      })
    }
    console.log(cart)
  }

  const style = {
    width: "1.5rem",
    height: "1.5rem",
    fontWeight: "700",
    margin: "0",
    padding: "0"
  }
  
  return (
    // Render add or remove button based on if product exists in cart already
    <>
    {cart.some((p) => p.id === id)
      ?
      <Button 
        style={style}
        onClick = {() => cartDispatch({type: "REMOVE_FROM_CART", payload: props})}
      >-</Button>
      : 
      <Button
        style={style}
        onClick = {() => cartDispatch({type: "ADD_TO_CART", payload: props})}
      >+</Button>   
    }
    </>
  )
}

export default AddToCartButton;