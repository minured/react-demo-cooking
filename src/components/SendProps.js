import React, { Fragment } from "react";
import PropTypes from "prop-types";

SendProps.propTypes = {
  num: PropTypes.number,
  str: PropTypes.string,
  obj: PropTypes.object,
  arr: PropTypes.array,
};

// prop-types能检测的类型：
// Son.propTypes = {
//     optionalArray: PropTypes.array,//检测数组类型
//     optionalBool: PropTypes.bool,//检测布尔类型
//     optionalFunc: PropTypes.func,//检测函数（Function类型）
//     optionalNumber: PropTypes.number,//检测数字
//     optionalObject: PropTypes.object,//检测对象
//     optionalString: PropTypes.string,//检测字符串
//     optionalSymbol: PropTypes.symbol,//ES6新增的symbol类型
// }

export default function SendProps(props) {
  return (
    <Fragment>
      <p>number: {props.num}</p>
      <p>string: {props.str}</p>
      <p>object: {JSON.stringify(props.obj)}</p>
      <p>array: {JSON.stringify(props.arr)}</p>
    </Fragment>
  );
}
