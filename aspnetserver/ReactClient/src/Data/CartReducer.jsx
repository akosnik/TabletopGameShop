// const addToCart = (cartState, addItem) => {
//   const existingItem = 
//   cartState.find((cartItem) => {
//     cartItem.id === addItem.id
//   });
//   if(existingItem) {
//     return [...cartState, { ...addItem, quantity: existingItem.quantity + 1 }]
//   } else {
//     return [...cartState, { ...addItem, quantity: 1 }]
//   }
// }

// const subFromCart = (cartState, subItem) => {
//   const existingItem =
//   cartState.find((cartItem) => {
//     cartItem.id === subItem.id
//   });
//   if(existingItem?.quantity > 1){
//     return [...cartState, { ...subItem, quantity: existingItem.quantity - 1 }]
//   } else {
//     return removeFromCart(cartState, subItem)
//   }
// }

// const removeFromCart = (cartState, removeItem) => {
//   return cartState.filter((cartItem) => {
//     cartItem.id !== removeItem.id;
//   })
// }

// export const cartReducer = (state, action) => {
//   switch(action.type){
//     case "ADD_TO_CART":
//       return {...state, cart: addToCart(state.cart, action.payload) };
//     case "SUB_FROM_CART":
//       return {...state, cart: subFromCart(state.cart, action.payload) }
//     case "REMOVE_FROM_CART":
//       return {...state, cart: removeFromCart(state.cart, action.payload) }
//     // case "CHANGE_CART_QTY":
//     default:
//       return state;
//   }
// }


