import classes from "./Testimonial.module.css";
import { Element } from "react-scroll";
import { IoIosStar } from "react-icons/io";

const Testimonial = () => {
  return (
    <Element name="testimonials">
      <p className={classes.tag}>Testimonials</p>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src="/image/test.png" />
        </div>
        <div className={classes.testimonial}>
          <div className={classes.content}>
            <span>
              A testimonial is an honest endorsement of your product or service
              that usually comes from a customer, colleague, or peer who has
              benefited from or experienced success as a result of the work you
              did for them.
            </span>
          </div>
          <div className={classes.star}>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <div className={classes.person}>
            <img src="/image/person2.png" />
            <p>Luis lara</p>
          </div>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.text}>
          <div className={classes.para}>
            Discover the convenience of online shopping & the opportunity of 
            <span> franchise ownership</span>
          </div>
          <button className={classes.button}><span>Enquire Now</span></button>
        </div>
        <div className={classes.shop}>
            <img src="/image/shop.png" />
        </div>
      </div>
    </Element>
  );
};

export default Testimonial;
