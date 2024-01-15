import React from 'react';

import _ from 'lodash';

const LodashTest = () => {
  const callback = _.debounce(
    (p) => {
      console.log(p);
    },
    1000,
    { leading: true, trailing: false }
  );
  return (
    <>
      <button onClick={() => callback('1111')}>11111</button>
      <button onClick={() => callback('2222')}>22222</button>
    </>
  );
};

export default LodashTest;
