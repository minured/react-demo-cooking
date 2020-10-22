import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import HomeList from "../../components/HomeList/HomeList";

export default function () {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <HomeCategory />
      <HomeList />
    </div>
  );
}
