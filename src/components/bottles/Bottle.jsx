import React from "react";

const Bottle = ({ bottle, handleCart }) => {
  return (
    <div className="border p-2 rounded-md">
      <div>
        {" "}
        <img className="w-full h-full" src={bottle.img} alt="" />
      </div>
      <div>
        <h3>{bottle.name}</h3>
        <p>${bottle.price}</p>
        <p>{bottle.stock} remaining stock</p>
        <button
          onClick={() => {
            handleCart(bottle);
          }}
          className="bg-blue-300 px-4 py-1 rounded my-1"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Bottle;
