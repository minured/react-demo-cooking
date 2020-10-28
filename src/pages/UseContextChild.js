import React, { useContext } from "react";
import { CatContext } from "./UseContext";

export default () => {
  const cat = useContext(CatContext);
  return (
    <div>
      <p>使用 useContext</p>
      <p>{JSON.stringify(cat)}</p>
      <hr />
      <p>使用 Consumer</p>
      <CatContext.Consumer>
        {(value) => <div>{JSON.stringify(value)}</div>}
      </CatContext.Consumer>

    </div>
  );
};
