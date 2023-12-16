import React, { useEvent, useState, useCallback } from 'react';

const useEventTest = () => {
  const [text, setText] = useState('ajdaslkjd');

  // const onClick = useCallback(() => {
  //   console.log(
  //     '🚀 ~ file: 11-useEventTest.jsx:5 ~ useEventTest ~ text:',
  //     text
  //   );

  //   setText(text + 'h');
  // }, [text]);

  const onClick = useEvent(() => {
    console.log(
      '🚀 ~ file: 11-useEventTest.jsx:5 ~ useEventTest ~ text:',
      text
    );

    setText(text + 'h');
  });

  return <p onClick={onClick}>{text}</p>;
};

export default useEventTest;
