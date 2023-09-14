import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import Header from "./components/header";
import Cart from "./components/cart";

function App() {
  const [Array, setArray] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setArray(data));
  }, []);
  // state for cart data load.

  const [cartProduct, setCartProduct] = useState([]);
  const productHandle = (Input) => {
   
    let value = [...cartProduct];

    if(!value.includes(Input)){
      value=[...cartProduct, Input]
      setCartProduct(value);
    }
  
    
  };

  return (
    <>
      {/* this is header section */}
      <Header></Header>
      <section className="flex gap-6 max-w-7xl mx-auto">
        {/* product section. */}
        <section className="w-[80%]">
          <h2 className="text-4xl font-bold mb-6" >Total Product is:{Array.length}</h2>
          <div className=" grid grid-cols-4 gap-4 gap-y-6">
            {Array.map((item) => (
              <Product
                eventHandle={productHandle}
                item={item}
                key={item.product_id}
              ></Product>
            ))}
          </div>
        </section>
        {/* cart section */}
        <section className="bg-amber-500 mt-16 h-max w-[20%] px-4 box-border sticky top-[0px] text-gray-950 rounded-lg text-xl " >
          <h1 className="text-3xl text-center mb-3 mt-5">Cart list:</h1>
          <Cart ArrayInput={cartProduct}></Cart>
          
        
          
         
          </section>
      </section>
    </>
  );
}

export default App;
