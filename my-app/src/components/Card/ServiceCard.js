import classes from "./ServiceCard.module.css";
import { useState } from "react";

const ServiceCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <>
      <div
        className={classes.card}
        style={{ backgroundImage: `url('${props.image}')` }}
        onClick={handleClick}
      >
        {showOverlay && (
          <div className={classes.overlay}>
            <p className={classes.heading}>{props.title}</p>
            <p className={classes.content}>{props.description}</p>
            <span className={classes.view}>View More</span>
          </div>
        )}
        {!showOverlay &&<span className={classes.title}>{props.title}</span>}
      </div>
    </>
  );
};

export default ServiceCard;
