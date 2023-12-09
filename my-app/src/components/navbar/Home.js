import classes from "./Home.module.css";
import NavBar from "./navbar";
import { Element } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
const Home = () => {
  return (
    <Element name="home">
      <div className={classes.home}>
        <NavBar />
        <div className={classes.text}>
          <p>
            <span className={classes.t1}> Now, anyone can farm </span>
            <span className={classes.t2}>
              <br />
              Easy Plant Kits for everyone
            </span>
          </p>
          <div className={classes.button}>
            <ScrollLink
              to="products"
              spy={true}
              smooth={true}
              duration={100}
              offset={-70}
              className="scroll"
            >
              <button>
                <p>Shop Now</p>
                <div className={classes.arrow}>
                  <FaArrowRightLong />
                </div>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Home;
