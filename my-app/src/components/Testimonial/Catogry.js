import classes from "./Catogory.module.css";
import CatogoryCard from "../Card/Catogory-Card";
import { Element } from "react-scroll";

const products = [
  {
    title: "Plants",
    image: "/image/catogory-image/cat1.png",
  },
  {
    title: "Pots",
    image: "/image/catogory-image/cat2.png",
  },
  {
    title: "Combos",
    image: "/image/catogory-image/cat3.png",
  },
];
const sub=[{
    title:'Flowering Plants',
    image:'/image/catogory-image/sub1.png'
},
{
    title:'Low-Light-Plants',
    image:'/image/catogory-image/sub2.png'
},
{
    title:'Flowering Plants',
    image:'/image/catogory-image/sub3.png'
}]

const Catogory = () => {
  let pdts = products.map((pdt) => (
    <CatogoryCard title={pdt.title} image={pdt.image} />
  ));
  return (
    <Element name="catogory">
      <p className={classes.tag}>Catogories</p>
      <div className={classes.catogory}>{pdts}</div>
      <p className={classes.tag2}>Sub Catogory</p>
      <div className={classes.sub}>
        {sub.map((pdt)=>(
            <div className={classes.card}>
            <div className={classes.image}>
                <img src={pdt.image}/>
            </div>
            <div className={classes.name}>{pdt.title}</div>
        </div>
        ))}
            
      </div>
    </Element>
  );
};
export default Catogory;
