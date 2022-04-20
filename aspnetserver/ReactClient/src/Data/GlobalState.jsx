import axios from "axios";
import React, {useReducer, useEffect} from "react";

export default GlobalState = (props) => {

  useEffect(()=>{
    axios.get('http://localhost:8285/products')
      .then(res=>{
        const products = res;
        console.log("Response:", res)
      })
      .catch(err=>{
        console.log("There was an error handlign the request:", err)
      })
  })

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
