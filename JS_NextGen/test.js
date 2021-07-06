//to be tested on windows
const tasklist = require("tasklist");
console.log("anurag");
tasklist().then((list) => {
  console.log("tasklist: ", list);
  //=> 0.55
});
