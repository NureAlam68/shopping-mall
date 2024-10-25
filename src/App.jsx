import { useState } from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  //when add one product two time then give alert state
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(500);

  const handleIncreasePrice = price => {
    setTotalPrice(totalPrice + price)
  }

  const handleDecreasePrice = price => {
    setTotalPrice(totalPrice - price)
  }
   

  // when add more than one then give alert function
  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find(
      (preProduct) => preProduct.id === product.id
    );

    if (isExist) {
      alert("Already added !");
    } else {
      handleIncreasePrice(product.price)  // for add money when add product
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  };

  const handleDelete = product => {
    handleDecreasePrice(product.price)
    const remainingProduct = selectedProducts.filter(preProduct => preProduct.id !== product.id);
    setSelectedProducts(remainingProduct);
  }

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
      <Navbar selectedProducts={selectedProducts} totalPrice={totalPrice}></Navbar>
      <div className="flex gap-6">
        <AllProducts
          handleSelectedProduct={handleSelectedProduct}
        ></AllProducts>
        <CartContainer
          handleActive={handleActive}
          isActive={isActive}
          selectedProducts={selectedProducts}
          handleDelete={ handleDelete}
        ></CartContainer>
      </div>
    </div>
  );
};

export default App;
