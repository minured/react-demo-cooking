import React from "react";
import { useAsync } from "react-use";
import http from "../../http";

export default () => {
  const url = "http://mock-api.com/mnEd3LgJ.mock/sublist";
  const getData = async () => {
    const res = await http.get(url);
    console.log(res);
  };

  return (
    <div>
      <p>1</p>
    </div>
  );
};
