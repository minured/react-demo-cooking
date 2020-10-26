import React, { useState } from "react";
import ContextChild from "./ContextChild";

// 创建一个 Context， 并导出
// Provider组件，向包裹的组件提供数据
// Consumer组件，包裹的组件可以获得Provider提供的数据
export const { Provider, Consumer } = React.createContext("defaultName");
export default function (props = { a: 1 }) {
  let normalValue = {
    name: "minu",
  };
  const modifyStateValue = () => {
    setStateValue({
      name: "new name",
    });
  };
  const modifyAge = () => {
    setStateValue((prevState, props) => {
      console.log("prevState: ");
      console.log(prevState);
      console.log("props: ");
      console.log(props);
      return {
        ...prevState,
        age: prevState.age + 1,
      };
    });
  };

  const [stateValue, setStateValue] = useState({
    name: "minured",
    gender: "male",
    age: 18,
  });

  const [count, setCount] = useState(1);

  const setStateTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const setStateTwiceWithFunction = () => {
    // 使用回调函数setState，每次都是使用 prevState 进行修改，所以会保存上一次的值
    setCount((prevState, props) => {
      return prevState + 1;
    });
    setCount((prevState, props) => prevState + 1);
  };

  return (
    <Provider
      value={{
        normalValue,
        stateValue,
        modifyStateValue,
        modifyAge,
      }}
    >
      <div>contextPage</div>
      <ContextChild />
      <p>count: {count}</p>
      <button onClick={setStateTwice}>set state twice</button>
      <button onClick={setStateTwiceWithFunction}>
        set state twice with function
      </button>
    </Provider>
  );
}
