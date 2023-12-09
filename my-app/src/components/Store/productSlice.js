import { createSlice } from "@reduxjs/toolkit";

const pItems = [
  {
    title: "Aglaonema",
    price: "250",
    image: "/image/product-image/AGLAONEMA PINK 1.png",
    fill: "false",
  },
  {
    title: "GOLDEN KING MARBLE",
    price: "340",
    image: "/image/product-image/GOLDEN KING MARBLE 1.png",
    fill: "true",
  },
  {
    title: "Radish microgreen ",
    price: "250",
    image: "/image/product-image/Radish microgreen seeds 1.svg",
    fill: "true",
  },
  {
    title: "Sansevieria Fernwood ",
    price: "250",
    image: "/image/product-image/Sansevieria Fernwood Mikado 1.png",
    fill: "false",
  },
];
const sitems = [
  {
    title: "Easy Plant Kits",
    image: "/image/service-image/ser1.png",
    description:
      "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
  },
  {
    title: "Landscaping",
    image: "/image/service-image/ser2.png",
    description:
      "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
  },
  {
    title: "Plant Gift",
    image: "/image/service-image/ser3.png",
    description:
      "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
  },
  {
    title: "Balcony & Terrace Gardens",
    image: "/image/service-image/ser1.png",
    description:
      "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: {
    productItems: pItems,
    serviceItems: sitems,
  },
});

export default productSlice;
