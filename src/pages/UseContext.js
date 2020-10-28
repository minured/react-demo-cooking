import React, { createContext } from "react";
import UseContextChild from "./UseContextChild";

const cat = {
  color: "black",
  age: 1,
};

// 在没有Provider的时候，defaultValue才会生效
export const CatContext = createContext(cat);

export default () => {
  return (
    <div>
      {/* <CatContext.Provider> */}
      <div>1</div>
      <UseContextChild />
      {/* </CatContext.Provider> */}

      <button onClick={() => {
          console.log(cat);
          cat.age = 6
          console.log(cat);

      }}>change cat</button>
    </div>
  );
};
