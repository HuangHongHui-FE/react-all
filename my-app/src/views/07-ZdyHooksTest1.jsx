import React, { useState } from 'react';

import useRandom from '../hooks/useRandom';

const ZdyHooksTest1 = () => {
  const count = useRandom();
  const [num, setNum] = useState(0);

  return (
    <>
      <div
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </div>
      <div>{count}</div>
    </>
  );
};
export default ZdyHooksTest1;
