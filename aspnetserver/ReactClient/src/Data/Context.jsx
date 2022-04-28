import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { cartReducer } from "./CartReducer"

const Cart = createContext();

const Context = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: []
  });

  useEffect(() => {
    axios.get(`http://localhost:8265/api/products`)
      .then(res=>{
        setProducts(res.data);
        console.log("Successfully retrieved 'Products'", res.data)
      })
      .catch(err=>{
        console.log("There was an error retrieving 'Products'", err)
      })
  }, [])

  return (
    <Cart.Provider value={{ cartState, cartDispatch, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;