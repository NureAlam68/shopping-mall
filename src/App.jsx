import { useState } from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleActive = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  return (
    <div className="max-w-[1600px] container mx-auto px-[140px]">
      <Navbar></Navbar>
      <div className="flex justify-around">
        <AllProducts></AllProducts>
        <CartContainer handleActive={handleActive} isActive={isActive}></CartContainer>
      </div>
    </div>
  );
};

export default App;
