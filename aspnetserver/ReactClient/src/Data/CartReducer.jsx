const addToCart = (cartState, addItem) => { 
  const existingItem = cartState.find((p) => p.id === addItem.id);
  if(!existingItem) {
    return [...cartState, {...addItem, quantity: 1 }]
  }
  return cartState;
}

const removeFromCart = (cartState, removeItem) => {
  return cartState.filter((cartItem) => cartItem.id !== removeItem.id);
}

const setQuantity = (cartState, plusItem, setValue) => {
  console.log("Ping")
  return cartState.filter((p) => 
    p.id === plusItem.id ? (p.quantity = setValue) : p.quantity
  );

}

const subQuantity = (cartState, subItem) => {
  const existingItem =
  cartState.find((cartItem) => cartItem.id === subItem.id);
  if(existingItem?.quantity > 0){
    return [...cartState, {...subItem, quantity: existingItem.quantity - 1 }]
  }
  return [...cartState, {...subItem, quantity: 0 }];
}

export const cartReducer = (state, action) => {

  switch(action.type){
    case "ADD_TO_CART":
      return {...state, cart: addToCart(state.cart, action.payload) };
    case "REMOVE_FROM_CART":
      return {...state, cart: removeFromCart(state.cart, action.payload) }
    case "PLUS_QTY":
      return {...state, cart: state.cart.filter((p) => 
        p.id === action.payload.id ? (p.quantity = action.payload.quantity + 1) : p.quantity
      ) }
    case "SUB_QTY":
      return {...state, cart: setQuantity(state.cart, action.payload, action.payload.quantity - 1) }
    case "SET_QTY":
      return {...state, cart: setQuantity(state.cart, action.payload, action.payload.quantity) }
    default:
      return state;
  }
}
