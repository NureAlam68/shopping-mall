import { useState } from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find(
      (preProduct) => preProduct.id === product.id
    );

    if (isExist) {
      alert("Already added !");
    } else {
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  };

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
      <div className="flex gap-6">
        <AllProducts
          handleSelectedProduct={handleSelectedProduct}
        ></AllProducts>
        <CartContainer
          handleActive={handleActive}
          isActive={isActive}
        ></CartContainer>
      </div>
    </div>
  );
};

export default App;
