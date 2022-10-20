import React, { useState, createContext } from "react";

const cartContext = createContext();

// ----PROVIDER----
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ---ADD ITEM TO CART---
  function addItem(item, count) {
    // ---IF ITEM IS IN CART---
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

  //   ---TOTAL ITEMS ON CART---
  function getTotalItemsInCart() {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  }

  //   ---ITEM IS IN CART---
  function isInCart(id) {
    return cart.some((item) => item.data.id === id);
  }

  // ---EMPTY CART---
  function emptyCart() {
    return setCart([]);
  }

  // ---DELETE ITEM---
  function deleteItem(id) {
    return setCart(cart.filter((item) => item.data.id !== id));
  }

  // ---GET ITEM PRICE---
  function getTotalItemPrice() {
    return cart.reduce((acc, item) => (acc += item.data.price * item.count), 0);
  }

  //   ---CONTEXT RETURN---
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
