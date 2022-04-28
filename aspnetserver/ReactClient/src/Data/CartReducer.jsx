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

const setQuantity = (cartState, cartItem) => {
  cartItem.quantity = parseInt(cartItem.quantity) || 1;
  if(cartItem.quantity < 1) cartItem.quantity = 1;
  if(cartItem.quantity > cartItem.inventory) cartItem.quantity = cartItem.inventory;
  console.log(cartItem.quantity, cartItem.inventory);
  
  // return [...cartState, { ...cartItem, quantity: cartItem.quantity }]
  return cartState.filter((p) => 
    p.id === cartItem.id ? (p.quantity = cartItem.quantity) : p.quantity
  ) 
}

export const cartReducer = (state, action) => {

  switch(action.type){
    case "ADD_TO_CART":
      return {...state, cart: addToCart(state.cart, action.payload) };
    case "REMOVE_FROM_CART":
      return {...state, cart: removeFromCart(state.cart, action.payload) }
    case "PLUS_QTY":
      ++action.payload.quantity
      return {...state, cart: setQuantity(state.cart, action.payload )}
    case "SUB_QTY":
      --action.payload.quantity
      return {...state, cart: setQuantity(state.cart, action.payload )}
    case "SET_QTY":
      return {...state, cart: setQuantity(state.cart, action.payload )}
    default:
      return state;
  }
}
