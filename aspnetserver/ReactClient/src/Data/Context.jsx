import { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer"

const Cart = createContext();

const Context = ({ children }) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: []
  });

  return (
    <Cart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;