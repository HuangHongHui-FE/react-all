import React, { useReducer, useRef } from 'react';

export default function AUseReducerText2() {
  const inputRef = useRef();

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return (state = [...state, { name: action.payload.name }]);
      case 'remove':
        return state.filter((_, index) => index !== action.index);
      default:
        return state;
    }
  };

  const [items, dispatch] = useReducer(reducer, [
    { name: 666 },
    { name: '111' },
  ]);

  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={() =>
          dispatch({ type: 'add', payload: { name: inputRef.current.value } })
        }
      >
        新增
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => dispatch({ type: 'remove', index })}>
              删除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
