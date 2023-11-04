import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = (props) => {
  let item = props.item;
  let itemIndex = props.itemIndex;

  const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div>
      <div style={{borderBottom:"2px solid black"}} className="flex gap-10 p-10 m-5">
        <div className="h-[180px] w-[180px]">
          <img src={item.image} className="h-full w-full"/>
        </div>

        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40">
            {item.title}
          </p>
          <p className="text-gray-400 font-normal text-[14px] text-left w-80">
            {item.description.split(" ").slice(0,15).join(" ") + "..."}
          </p>
          <div className="flex justify-between gap-12 mt-5">
            <p className="text-green-600 font-semibold items-center w-full">${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
