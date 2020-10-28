import React, { useCallback, useMemo, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";
import useCallbackChild from "./UseCallbackChild";

// useMemo的使用
export default () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [count, setCount] = useState(3);

  const doubleA = () => {
    console.log("执行了 doubleA");
    return a * 2;
  };

  // 缓存起来，函数组件刷新的时候，a不变化就不会重新计算
  const tripleA = useMemo(() => {
    console.log("执行了 tripleA");
    // 如果返回一个值，可以直接使用 {tripleA}
    // 如果返回一个函数，要加括号 {tripleA()}
    return a * 3;

    // 根据依赖更新函数，如果依赖没有[]，即使a变化也不会更新
  }, [a]);

  // useCallback 缓存函数
  // 把传给子组件的函数缓存器起来
  // 当我setB的时候，函数 callbackAdd 不会刷新，避免了不必要渲染
  const callbackAdd = useCallback(() => {
    console.log("执行了 callbackAdd");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>useMemo</p>
      <p>b: {b}</p>
      <p>doubleA: {doubleA()}</p>
      <p>tripleA: {tripleA}</p>
      {/* doubleA 的计算只与 a 有关，但是b变化的时候，整个函数组件都会刷新 */}
      {/* 但是 doubleA 的计算是没有必要的 */}
      <button onClick={() => setB(b + 1)}>setB</button>
      <button onClick={() => setA(a + 1)}>setA</button>

      <hr />
      <br />
      <UseCallbackChild callbackAdd={callbackAdd} count={count} />
    </div>
  );
};
