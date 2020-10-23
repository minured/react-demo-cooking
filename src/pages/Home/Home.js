import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import HomeList from "../../components/HomeList/HomeList";
import { useHistory } from "react-router-dom";

export default function (props) {
  let history = useHistory();

  const handleClick = () => {
    console.log(props);
    history.push("/login");
  };
  return (
    <div>
      <Header />
      <HomeCarousel />
      <HomeCategory />
      <HomeList />
      <button onClick={handleClick}>跳转到login</button>
    </div>
  );
}
