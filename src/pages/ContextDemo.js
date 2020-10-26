import React, { useState } from "react";

export const { Provider, Consumer } = React.createContext();

const ChildPage = () => {
  return <Consumer>{(value) => <div>{JSON.stringify(value)}</div>}</Consumer>;
};

export default () => {
  const [msg, setMsg] = useState("message from ContextDemo");
  return (
    <Provider value={msg}>
      <ChildPage />
    </Provider>
  );
};
