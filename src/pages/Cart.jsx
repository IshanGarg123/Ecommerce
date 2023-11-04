import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount ,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => (acc + curr.price),0));
  },[cart])

  return <div>
    {
      cart.length > 0 ?
      (<div className="flex justify-evenly">
        <div>
          {
            cart.map((item,index)=>(
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))
          }
        </div>
        <div>
          <div className="mt-20">
            <div className="text-[20px] text-green-600"> Your Cart</div>
            <div className="text-[40px] text-green-600 text-bold mb-3"> Summary </div>
            <p>
              <span> Total Items: {cart.length}</span>
            </p>
          </div>

          <div className="mt-20">
            <p> Total Amount: <b>${totalAmount}</b></p>
            <button className="bg-green-600 text-white p-3 mt-3">
              CheckOut Now
            </button>
          </div>
        </div>

      </div>) :
      (<div className="flex flex-col items-center justify-center mt-[200px]">
          <div>
            <h1><b>Your Cart is Empty!</b></h1>
          </div>
          <div>
              <Link to="/">
              <button className="bg-green-600 text-white p-3 mt-3 text-semibold">
                Shop Now
              </button>
              </Link>
          </div>
      </div>)
    }
  </div>;
};

export default Cart;
