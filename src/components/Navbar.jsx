import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return(<div>
    <div
    style={{display:"flex",justifyContent:"space-around",
    backgroundColor:"black",color:"white"}}>

      <NavLink to="/">
      <img src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg"
        style={{height:"60px",width:"75px"}}
      />
      </NavLink>

      <div
       style={{display:"flex",justifyContent:"space-around",textAlign:"center",
      width:"200px",height:"60px"}}>
        <NavLink to="/">
        <p style={{paddingTop:"18px"}}> Home </p>
        </NavLink>

        <NavLink to="/cart">
          <div style={{paddingTop:"18px"}}> 
          <FaShoppingCart/>
          {
            cart.length > 0 && <span>{cart.length}</span> 
          }
          </div>
        </NavLink>
      </div>
      
    </div>
  </div>);
};

export default Navbar;
