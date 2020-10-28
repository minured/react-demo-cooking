import React, { useEffect, useState } from "react";

const Child = (props) => {
  useEffect(() => {
    props.onChange(props.id);
  }, [props.id]);
  return (
    <div>
      <p>2</p>
      <p>{props.id}</p>
    </div>
  );
};

export default () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <p>1</p>
      <Child onChange={(id) => setId(id)} id={id} />
    </div>
  );
};
