import React from "react";

import { Consumer } from "./ContextPage";

export default function InnerChild(props) {
  return (
    <Consumer>
      {(value) => (
        <div>
          <div>inner-child</div>
          <p>{value.normalValue.name}</p>
          <p>{value.stateValue.age}</p>
          <button
            onClick={() => {
              console.log(value.stateValue);
              value.modifyAge()
              
            }}
          >
            修改Provider的数据
          </button>
        </div>
      )}
    </Consumer>
  );
}
