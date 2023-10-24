import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct"
import Error from "./Error";


const App = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
   );
};

export default App;
