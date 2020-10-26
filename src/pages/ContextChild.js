import React, { Fragment } from "react";
import InnerChild from "./InnerChild";

// 从父组件导入 Consumer 用于获取provider的数据
import { Consumer } from "./ContextPage";

export default function (props) {
  return (
    <Fragment>
      <div>child</div>
      {/* 注意Consumer 的child只能是一个函数 */}
      <Consumer>
        {(value) => (
          <div className="wrapper">
            <p>{JSON.stringify(value)}</p>
            <hr />
            <p>normalValue: {value.normalValue.name}</p>
            <p>
              stateValue: {value.stateValue.gender}---{value.stateValue.name}
            </p>

            <button
              onClick={() => {
                console.log(value);
                value.normalValue.name = "666";
                value.modifyStateValue();
              }}
            >
              修改Provider的stateValue
            </button>
            <InnerChild />
            <FunCom />
          </div>
        )}
      </Consumer>
    </Fragment>
  );
}

const FunCom = (props) => <div>i am a funCom</div>;
