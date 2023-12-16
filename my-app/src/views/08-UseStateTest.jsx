import React, { useState } from 'react';

const UseStateTest = () => {
  const [searchParams, setSearchParams] = useState({
    pageNo: 1,
    pageSize: 10,
  });

  const [deepObj, setDeepObj] = useState({
    name: {
      ageId: 1,
      age: {
        heightId: 1,
        height: {
          b: 1,
        },
      },
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setSearchParams({
            pageNo: 2,
            pageSize: 10,
          });
        }}
      >
        按钮
      </button>
      <div>
        {searchParams.pageNo}---{searchParams.pageSize}
      </div>
      <br></br>
      <button
        onClick={() => {
          setDeepObj({
            name: {
              ageId: 2,
              age: {
                heightId: 2,
                height: {
                  b: 2,
                },
              },
            },
          });
        }}
      >
        按钮
      </button>
      <div>
        {deepObj.name.ageId}---{deepObj.name.age.height.b}
      </div>
    </>
  );
};

export default UseStateTest;
