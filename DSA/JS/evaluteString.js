//arthemetic string
// 2+2
// 2+2*(4-2)
// 6/3-1

function solve(evalString) {
  return eval(evalString);
}

solution = solve("2+2*(4-2)");
console.log(solution);
