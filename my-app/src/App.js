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
import { useLocation, NavLink, Link } from "react-router-dom";
import Verification from "./components/Login/Verification";
import AuthContext from "./components/Store/Auth-Context";
import { useContext } from "react";

import "./App.css";
function App() {
  const location = useLocation();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
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
      <div
        class="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div class="modal-body">
              <a href="/">Home</a>
              <ScrollLink
                to="testimonials"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                data-bs-dismiss="modal"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                duration={200}
                offset={-70}
                data-bs-dismiss="modal"
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="products"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                data-bs-dismiss="modal"
              >
                Shop
              </ScrollLink>
              <Link to="#" data-bs-dismiss="modal">
                About Us
              </Link>
              <a href="/cart">Cart</a>
              {!isLoggedIn && <a href="/login">Log In</a>}
              {isLoggedIn && (
                <p onClick={logoutHandler} data-bs-dismiss="modal">
                  Log Out
                </p>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
