import classes from "./Foooter.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerlogo}>
        <img src="/image/blackfooter.png"/>
      </div>
      <div className={classes.content}>
        
          <li>Help</li>
          <li>Contact Us</li>
          <li>Privacy & Terms</li>
        
      </div>
      <div className={classes.logo}>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Footer;
