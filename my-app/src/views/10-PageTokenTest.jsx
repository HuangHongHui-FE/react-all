import React, { useEffect } from 'react';
import usePageTokenWin from '../hooks/usePageTokenWin';

const PageTokenTest = () => {
  console.log('1---');
  
  usePageTokenWin();
  // useEffect(() => {

  // }, [])

  return (
    <div>
      <span>666</span>
      <button
        onClick={() => {
          window.open('http://www.baidu.com', '_self');
        }}
      >
        跳转
      </button>
    </div>
  );
};

export default PageTokenTest;
