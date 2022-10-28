import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    if (isInCart(item.data.id)) {
      let newCart = cart.map((itemMap) => {
        if (itemMap.data.id === item.data.id) {
          let newItem = itemMap;
          newItem.count += count;
          return newItem;
        } else return itemMap;
      });
      setCart(newCart);
    } else {
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }

  function getTotalItemsInCart() {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  }

  function isInCart(id) {
    return cart.some((item) => item.data.id === id);
  }

  function emptyCart() {
    return setCart([]);
  }

  function deleteItem(id) {
    return setCart(cart.filter((item) => item.data.id !== id));
  }

  function getTotalItemPrice() {
    return cart.reduce((acc, item) => (acc += item.data.price * item.count), 0);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        getTotalItemsInCart,
        isInCart,
        emptyCart,
        deleteItem,
        getTotalItemPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
