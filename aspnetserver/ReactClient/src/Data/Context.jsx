import axios from "axios";
import { createContext, useContext, useReducer, useEffect, useState} from "react";
import {cartReducer} from "./CartReducer"

const Cart = createContext();

function Context ({children}){
  const [products, setProducts] = useState([]);//product api call
  
  useEffect(()=>{
    axios.get(`http://localhost:8265/api/products`)
    .then(res=>{
      setProducts(res.data);
      console.log("Successfully retrieved 'Products'", res.data)
    })
    .catch(err=>{
      console.log("There was an error retrieving 'Products'", err)
    })
  },[])

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: []
  });

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