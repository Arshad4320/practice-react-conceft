const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};
const saveToLocalStorageCart = (cart) => {
  const stringData = JSON.stringify(cart);
  localStorage.setItem("cart", stringData);
};

const addItemLocalStorage = (id) => {
  const getCart = getCartFromLocalStorage();
  const newCart = [...getCart, id];
  saveToLocalStorageCart(newCart);
};
const removeFromToLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((sortedId) => sortedId !== id);
  saveToLocalStorageCart(remainingCart);
};
export {
  getCartFromLocalStorage,
  addItemLocalStorage,
  removeFromToLocalStorage,
};
