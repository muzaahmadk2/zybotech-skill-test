import Classes from "./Catogory-Card.module.css";
import { useState } from "react";

const CatogoryCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div
        className={`${Classes.card}  ${
          showDetails && `${Classes.showDetails} ${Classes.box_shadow}`
        }`}
        onClick={toggleDetails}
      >
        <div
          className={
            !showDetails
              ? `${Classes.container} ${Classes.box_shadow}`
              : `${Classes.container} `
          }
        >
          <img src={props.image} />
          <div className={Classes.name}>{props.title}</div>
        </div>
      </div>
    </>
  );
};
export default CatogoryCard;
