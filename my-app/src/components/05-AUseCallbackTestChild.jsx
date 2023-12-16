import React, { memo } from 'react';

const AUseCallbackTestChild = memo(() => {
  console.log('子组件重新构建了');
  return <>UseCallbackTestChild</>;
});

export default AUseCallbackTestChild;
