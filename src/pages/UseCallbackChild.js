import React from "react";

export default (props) => {
  return (
    <div>
      <p>使用被缓存的函数</p>
      <p>count： {props.count}</p>
      <button onClick={props.callbackAdd}>+1</button>
    </div>
  );
};
