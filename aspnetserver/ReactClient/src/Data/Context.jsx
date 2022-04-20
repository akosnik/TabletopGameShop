import { createContext, useContext, useReducer } from "react";

const Cart = createContext();

const Context = ({children}) => {
  const products = []//product api call
  
  useEffect(()=>{
    axios.get(`http://localhost:8265/products`)
    .then(res=>{
      console.log("Successfully retrieved 'Products'", res)
    })
    .catch(err=>{
      console.log("There was an error retrieving 'Products'", err)
    })
  })

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    products: products,
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