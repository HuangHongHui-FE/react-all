import React, { useState } from 'react';

const MapTest = () => {
  const [obj, setObj] = useState({ name: 'fg', age: 18 });

  const changeObj = () => {
    setObj({ ...obj, age: obj.age + 1 });
  };
  return (
    <>
      <div>
        <button onClick={changeObj}>改变obj</button>
      </div>
      {obj.name}-{obj.age}
    </>
  );
};

export default MapTest;
