import React, { useReducer } from "react";


// 类似redux，也有一个reducer
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, {count: 1});

  return (
    <div>
      <p>useReducer</p>
      <p>count: {state.count}</p>
      {/* 形同redux， dispatch 接受一个action，之后会执行reducer */}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};
