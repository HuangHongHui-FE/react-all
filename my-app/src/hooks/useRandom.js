import { random } from "lodash";
import React, { useState, useEffect } from "react";

const useRandom = () => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ file: useRandom.js:6 ~ useRandom ~ count:", count)
  
    
  useEffect(() => {
    setCount(random(0, 100));
    console.log(111)
  }, []);

  return count;
};
export default useRandom;
