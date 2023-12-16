import React, { useState, useEffect } from 'react';

const usePageTokenWin = (props) => {
  console.log('222');
  useEffect(() => {
    console.log('进入', window);
    window['validDoublePageParams'] = {
      name: '111',
    };
    return () => {
      console.log('离开');
      window['validDoublePageParams'] = {};
    };
  }, []);
};

export default usePageTokenWin;
