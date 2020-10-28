import React from "react";
import { useMouse, useWindowSize } from "react-use";

export default () => {
  const mousePosition = useMouse();
  const windowSize = useWindowSize();
  return (
    <div>
      <p>{JSON.stringify(mousePosition)}</p>
      <p>{JSON.stringify(windowSize)}</p>
    </div>
  );
};
