import React, { useEffect, useState, useRef } from "react";
export const EffectToLifeCycle = () => {
  const [data, setData] = useState([]);
  console.log("EffectToLifeCycle---", "index");

  useEffect(() => {
    console.log("EffectToLifeCycle---", "useEffect里面内容!");
  }, [data]);

  useEffect(() => {
    console.log("EffectToLifeCycle---", "组件挂载完之后做某事");
    return () => {
      console.log("EffectToLifeCycle---", "组件即将卸载的时候做某事");
    };
  }, []);

  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      console.log(
        "EffectToLifeCycle---",
        "组件更新后做某事，初始的时候不会调用"
      );
    } else {
      isMounted.current = true;
    }
  });

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 1) {
      console.log("EffectToLifeCycle---", "useEffect里面写条件");
    }
  }, [count]);

  const changeData = () => {
    setData([...data, 1]);
  };

  const changeCount = () => {
    setCount(1);
  };

  return (
    <>
      <button onClick={changeData}>changeDataBth</button>
      <button onClick={changeCount}>changeCountBth</button>
    </>
  );
};
