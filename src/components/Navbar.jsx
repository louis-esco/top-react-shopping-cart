import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navBar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
    </div>
  );
}
