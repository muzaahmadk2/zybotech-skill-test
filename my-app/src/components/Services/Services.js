import classes from "./Services.module.css";
import ServiceCard from "../Card/ServiceCard";
import { Container } from "react-bootstrap";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";


const Services = () => {
  const products = useSelector((state)=>state.products.serviceItems);
  const pdcts = products.map((pdt) => (
    <ServiceCard
      title={pdt.title}
      image={pdt.image}
      description={pdt.description}
    />
  ));
  return (
    <Element name="services">
      <span className={classes.tag}>Our Services</span>
      <div className={classes.container}>{pdcts}</div>
      <Container className={classes.container2}>
        <div className={classes.overview}>
          <div className={classes.item}>
            <span>400+</span>
            <p>Products</p>
          </div>
          <div className={classes.item}>
            <span>1100+</span>
            <p>Orders</p>
          </div>
          <div className={classes.item}>
            <span>1250+</span>
            <p>Plant Types</p>
          </div>
        </div>
        <div className={classes.image}>
                <div className={classes.ellipseImage}></div>
                <img src="/image/person.png" className={classes.overlay} />
        </div>
        <div className={classes.overview}>
          <div className={classes.item}>
            <span>350+</span>
            <p>Projects Done</p>
          </div>
          <div className={classes.item}>
            <span>400+</span>
            <p>Happy Clients</p>
          </div>
          <div className={classes.item}>
            <span>1250+</span>
            <p>Plant Types</p>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Services;
