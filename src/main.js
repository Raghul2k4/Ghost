import React from "react";
import Carousel from "./components/MainComponents/carousel";
import Categories from "./components/MainComponents/categories";
import ServiceCard from "./components/MainComponents/Services";
import OfferZone from "./components/MainComponents/OfferZone";
import Footer from "./components/MainComponents/Footer";
import GamePopup from "./pages/GamePop";
import NavBar from "./components/MainComponents/NavBar";
const Main = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      <NavBar/>
      <Carousel />
      <Categories />
      <ServiceCard />
      <OfferZone />
      <GamePopup/>
      <Footer />
    </div>
  );
};

export default Main;
