import classes from "./Products.module.css";
import Card from "../Card/Card";
import { Container } from "react-bootstrap";
import { LuPlay } from "react-icons/lu";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";




const Products = () => {
  const products = useSelector((state)=> state.products.productItems);
  let pdtcts = products.map((pdt) => (
    <Card
      title={pdt.title}
      image={pdt.image}
      price={pdt.price}
      fill={pdt.fill}
    />
  ));
  return (
    <Element name="products">
      <Container>
        <h1 className={classes.tag}>Our Recent Products</h1>
        <div className={classes.container}>{pdtcts}</div>
        <span className={classes.view}>View More...</span>
      </Container>

      <div className={classes.container2}>
        <div className={classes.description}>
          <div className={classes.heading}>
            The world's <br />
            1st subscription based <br />
            Indoor Plant Company
          </div>
          <div className={classes.text}>
            <span>
              The world’s first subscription based Indoor Plant Company –
              Harvestay is revolutionising the way people buy and care for their
              plants. With this innovative model, customers can subscribe to a
              monthly delivery of a curated selection of healthy and vibrant
              plants that{" "}
            </span>
          </div>
        </div>
        <div className={classes.image_portion}>
            <div className={classes.image}>
                <img className={classes.photo} src="/image/img1.png" />
                <div className={classes.radial} />
                <img className={classes.circle_1} src="/image/Ellipse 2.svg" />
                <img className={classes.circle_2} src="/image/Ellipse 3.svg" />
                <span><LuPlay size={40} /></span>
            </div>
        </div>
      </div>
      </Element>
  );
};

export default Products;
