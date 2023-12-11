import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthContext from "../Store/Auth-Context";
import { useContext, useState } from "react";
import { BsList } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";

const NavBar = () => {
  const location = useLocation();
  const logo1 = "logo1";
  const logo2 = "logo2";
  const navbar1 = "navbar1";
  const navbar2 = "navbar2";
  const curr = location.pathname === "/" ? logo1 : logo2;
  const navbar = location.pathname === "/" ? navbar1 : navbar2;
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [smShow, setSmShow] = useState(false);

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/')
  };
  const navigatetoLogin = () => {
    navigate("/login");
  };

  return (
    <div className={`${classes[navbar]}`}>
      <div className={`${classes[curr]}`}></div>
      <div className={classes.navlink}>
        <ul>
          <li>
            {/* <a href="#">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              duration={100}
              offset={-70}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={200}
              offset={-70}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="products"
              spy={true}
              smooth={true}
              duration={100}
              offset={-70}
            >
              Shop
            </ScrollLink>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={classes.modalContainer}>
        <BsList color="black" data-bs-toggle="modal" data-bs-target="#exampleModal" />
       
      </div>
      <div className={classes.icons}>
        <div>
          <CiSearch />
        </div>
        <div>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={<VscAccount />}
            menuVariant="dark"
            drop="down-centered"
          >
            {!isLoggedIn && (
              <NavDropdown.Item onClick={navigatetoLogin}>
                Log In
              </NavDropdown.Item>
            )}
            {isLoggedIn && (
              <NavDropdown.Item onClick={logoutHandler}>
                Log Out
              </NavDropdown.Item>
            )}
          </NavDropdown>
          {/* <Link to='/login'><VscAccount /></Link>  */}
        </div>
        <div>
          <Link to={isLoggedIn ? "/cart" : "/login"}>
            <GrCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
