import { Routes, Route } from "react-router";
import Home from "./components/navbar/Home";
import { Link as ScrollLink } from "react-scroll";
import { FaCircleArrowUp } from "react-icons/fa6";
import Products from "./components/products/Products";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Catogory from "./components/Testimonial/Catogry";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { useLocation, Navigate } from "react-router-dom";
import Verification from "./components/Login/Verification";
import ProtectedRoute from "./components/Route/ProtectedRoute";

import "./App.css";
function App() {
  const location = useLocation();
  const isAuthenticated = false;

  return (
    <>
      <header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home id="home" />} />
          {/* <ProtectedRoute
            path="/cart"
            component={<Cart/>}
            isAuthenticated={isAuthenticated}
          /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify" element={<Verification />} />
        </Routes>
      </header>
      <main>
        {location.pathname === "/" ? (
          <>
            <Products id="products" />
            <Services id="services" />
            <Testimonial id="testimonials" />
            <Catogory id="catogory" />
          </>
        ) : null}
      </main>
      <div className="search_button">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={100}
          offset={-70}
          className="scroll"
        >
          <FaCircleArrowUp size={38} />
        </ScrollLink>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
