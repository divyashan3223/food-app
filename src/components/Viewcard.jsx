import { useEffect, useState } from "react";

const ViewCard = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + parseInt(cur.amount), 0));
  }, [cart]);
  return (
    <div className="card-container ">
      <h1 className="text-4xl">Card Products</h1>
      {cart.map((product) => (
        <div className="card-product border border-black  h-32 flex items-center px-2">
          <div className="img h-24">
            <img src={product.pic} alt="" className="h-full" />
          </div>
          <div className="details px-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p>price:{product.amount}</p>
          </div>
        </div>
      ))}

      <h1 className="text-4xl ">Total Price Rupies:{total}</h1>
    </div>
  );
};

export default ViewCard;
