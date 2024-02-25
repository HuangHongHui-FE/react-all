const _ = require("lodash");

const arr = [
  {
    name: "111",
    id: 111,
  },
  {
    name: "222",
    id: 222,
  },
  {
    name: "333",
    id: 333,
  },
  {
    name: "222",
    id: 222,
  },
  {
    name: "333",
    id: 333,
  },
];

console.log("111---", _.unionBy([2.1], [1.2, 2.3], Math.floor));
console.log("222---", _.unionBy(arr, 'id'))
const response = {

}
console.log(_.get(response, 'result.data') || [])

