import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(0);

  const updateCartItems = (newItems) => {
    setCartItems(newItems);
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      updateCartItems
    }}>
      {props.children}
    </CartContext.Provider >
  )
}