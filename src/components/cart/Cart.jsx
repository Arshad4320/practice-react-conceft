const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div className="flex gap-4 mb-10">
      {cart.map((item) => (
        <div className="w- h-24">
          <img className="w-full h-full" src={item?.img} alt="" />
          <button
            onClick={() => {
              handleRemoveItem(item.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
