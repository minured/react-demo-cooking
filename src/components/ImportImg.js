import React from "react";

export default function (props) {
  return (
    <img
      src={require(`../assets/images/${props.src}`)}
      alt="imgCom"
      height={props.height}
    />
  );
}
