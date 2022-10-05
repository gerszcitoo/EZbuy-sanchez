import React, { useState, createContext } from "react";

const cartContext = createContext();

// ----PROVIDER----
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

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
    let total = 0;
    cart.forEach((item) => {
      total = total + item.count;
    });
    return total;
  }

  //   ---ITEM IS IN CART---
  function isInCart(id) {
    let found = cart.some((item) => item.data.id === id);
    return found;
  }

  //   ---CONTEXT RETURN---
  return (
    <cartContext.Provider
      value={{ cart, addItem, getTotalItemsInCart, isInCart }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
