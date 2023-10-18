import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Header from "./components/Header";
import CartItemDrawer from "./components/CartItemDrawer";
import { useCartContext } from "./context/cart_context";
import Payment from "./components/Payment";
import { NavLink } from "react-router-dom";

function App() {
 
  const { cart, openCart,setOpenCart } = useCartContext();

  return (
    <Router>
      <Header />
      {openCart && (
        <div className="colordiv">
          <div className="cartnew-item">
            <CartItemDrawer cart={cart} />
            <NavLink  to="/payment" className="cartDrawer-checkOut-btn">
              <button onClick={setOpenCart}> Check Out</button>
            </NavLink>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
