import { createStore } from "redux";
import React, { Component, Fragment } from "react";
import SendProps from "../components/SendProps";

//redux 不是专用于 react 的
// 不同于 react-redux

// 创建仓库管理员，一个函数
// reducer 的 参数 看作是一个 action
const reducer = (state, action) => {
  console.log("reducer 执行了---------");
  console.log("修改前的 state： ");
  console.log(state);
  console.log("当前的action： ");
  console.log(action);
  if (action.type === "add") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.num = action.value;
    console.log(newState);

    // 这里return 的 newState，直接改变了 store 的 state
    // return {num: 999};
    return newState;
  }

  // return 定义初始数据
  return {
    num: 1,
  };
};

// 创建 store 仓库, 传一个 reducer 管理员
const store = createStore(reducer);

export default class Test extends Component {
  constructor(props) {
    super(props);

    // 取store数据 作为自己的状态
    this.state = store.getState();

    //绑定 store 与 state
    //订阅 store的变化， 当 store变化了，组件再次 store.getState()
    store.subscribe(this.storeChange);
  }

  // 修改store
  add = () => {
    const action = {
      type: "add",
      value: this.state.num + 1,
    };
    //每次执行 dispatch，都会调用 reducer
    // action 看作一次修改动作， 把最新的值，和修改规则传进去
    store.dispatch(action);
  };

  storeChange = () => {
    console.log("storeChange执行了========");
    this.setState(store.getState());
  };

  render() {
    return (
      <Fragment>
        <hr />
        <p>state from store</p>
        <div>{JSON.stringify(this.state)}</div>
        <div>num from store: {this.state.num}</div>
        <button onClick={this.add}>action to +1</button>

        <hr />
        <p>props 校验</p>
        <SendProps num={666} str={"hello"} obj={{name: "minu"}} arr={[1, 2, 3]} />
      </Fragment>
    );
  }
}
