import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home.js";
import HowToUseRedux from "./pages/HowToUseRedux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ContextPage from "./pages/ContextPage";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import UseMemo from "./pages/UseMemo";
import UseRef from "./pages/useRef";
import RequestPage from "./pages/bestPractices/Request";
import UseEffectPage from "./pages/bestPractices/UseEffectPage";
import ReactUse from "./pages/bestPractices/ReactUse";

const defaultState = {
  num: 1,
  msg: "message from store",
};

const reducer = (state = defaultState, action) => {
  // 这里一般用 switch
  if (action.type === "num") {
    // 深拷贝一个 新的state
    let newState = JSON.parse(JSON.stringify(state));
    newState.num = action.value;
    return newState;
  } else if (action.type === "msg") {
    // reducer 实际上是一个 浅复制
    // 使用 {...state} 或者
    let newState = Object.assign({}, state);
    // let newState = {...state}
    newState.msg = action.value;
    console.log(newState);
    return newState;
  }
  return state;
};

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    num: state.num,
    msg: state.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // button 上的事件处理函数， 定义在这里
    handleModifyNum(value) {
      let action = {
        type: "num",
        value: value,
      };
      dispatch(action);
    },

    handleModifyMsg(value) {
      let action = {
        type: "msg",
        value: value,
      };
      dispatch(action);
    },
  };
};

function App(props) {
  return (
    <div className="App">
      <p>{JSON.stringify(props)}</p>
      <p>num: {props.num}</p>
      <p>msg: {props.msg}</p>
      {/* 通过props直接取得handleClick */}
      <button onClick={() => props.handleModifyNum(props.num + 1)}>
        modify num
      </button>
      <button onClick={() => props.handleModifyMsg("a new msg")}>
        modify msg
      </button>
      <hr />
      <br />
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/howtouseredux" component={HowToUseRedux} />
          <Route path="/contextpage" component={ContextPage} />
          <Route path="/usecontext" component={UseContext} />
          <Route path="/usereducer" component={UseReducer} />
          <Route path="/usememo" component={UseMemo} />
          <Route path="/useref" component={UseRef} />
          <Route path="/request" component={RequestPage} />
          <Route path="/useeffect" component={UseEffectPage} />
          <Route path="/reactuse" component={ReactUse} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </div>
  );
}

// connect(用于把store上的state映射为组件的props，存放修改store的函数|组件可以直接使用这里存放的函数)(组件)
const App2 = connect(mapStateToProps, mapDispatchToProps)(App);

// 总之，connect之后，App 通过props取得state的定义的方法

ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.getElementById("root")
);
