import React, { useState } from "react";
import "./Header.scss";
import { NavBar, SearchBar } from "antd-mobile";
import Image from "../../components/ImportImg";

export default function () {
  let [inputValue, setInputValue] = useState("");
  const onChange = (v) => {
    setInputValue(v);
    console.log(inputValue);
  };
  return (
    <div className="navbar-wrapper">
      <NavBar
        className="navbar"
        mode="dark"
        leftContent={[<Image src="logo.png" key={0} height={30} />]}
        onLeftClick={() => console.log("onLeftClick")}
      >
        <SearchBar
          placeholder="Search"
          maxLength={30}
          key={0}
          onSubmit={() => console.log("onSubmit")}
          onChange={onChange}
        />
      </NavBar>
    </div>
  );
}
