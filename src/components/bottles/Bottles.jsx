import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import {
  addItemLocalStorage,
  getCartFromLocalStorage,
  removeFromToLocalStorage,
} from "../../utilites/localStorage";
import Cart from "../cart/Cart";

const Bottles = ({ promiseData }) => {
  const [cart, setCart] = useState([]);

  const handleCart = (bottle) => {
    setCart([...cart, bottle]);
    addItemLocalStorage(bottle.id);
  };
  // const handleRemoveItem = (id) => {
  //   removeFromToLocalStorage(id);
  //   const remainingCart = cart.filter((bottle) => bottle.id !== id);
  //   setCart(remainingCart);
  // };
  const handleRemoveItem = (id) => {
    removeFromToLocalStorage(id); // LocalStorage update
    const updatedCart = getCartFromLocalStorage().map((id) =>
      bottles.find((b) => b.id === id)
    );
    setCart(updatedCart); // UI update
  };

  const bottles = use(promiseData);

  useEffect(() => {
    const storedData = [];
    const storedCard = getCartFromLocalStorage();
    for (const id of storedCard) {
      const data = bottles.find((bottle) => bottle.id !== id);
      storedData.push(data);
    }
    setCart(storedData);
  }, [bottles]);
  return (
    <>
      {" "}
      <p>cart quantity : {cart?.length}</p>
      <Cart handleRemoveItem={handleRemoveItem} cart={cart} />
      <div className="grid grid-cols-4 gap-4">
        {bottles.map((bottle) => (
          <Bottle handleCart={handleCart} key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </>
  );
};

export default Bottles;
