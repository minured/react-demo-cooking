import React, { useRef, useState } from "react";

export default () => {
  const [value, setValue] = useState("123");
  // 用于获取DOM元素
  const inputEl = useRef(null);
  const onInputChange = (e) => {
    // e.persist();
    setValue(e.target.value);
  };
  return (
    <div>
      <p>useRef</p>
      <input
        type="text"
        ref={inputEl}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          console.log(inputEl.current.value);
        }}
      >
        log input value
      </button>
    </div>
  );
};
