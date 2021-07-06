function binarySearch(A, x) {
  let low = 0;
  let high = A.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);
    if (A[mid] == x) {
      return true;
    } else if (A[mid] < x) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return false;
}

const io = require("console-read-write");

async function main() {
  io.write("Enter the length of array");
  let n = await io.read();
  console.log("length of array = " + n);

  let i,
    X,
    A = [];
  for (i = 0; i < n; i++) {
    io.write("Enter the" + i + "th element");
    A[i] = await io.read();
  }

  console.log("Input Array->" + A);

  A.sort((a, b) => a - b);
  // 1,2,23,29,34,51
  console.log("Sorted Array->" + A);

  io.write("Enter value to search");
  X = await io.read();

  value = binarySearch(A, X);
  console.log(value);
  if (value) {
    console.log("Element Found!!!");
  } else {
    console.log("Element Not Found!!!");
  }
}

main();
