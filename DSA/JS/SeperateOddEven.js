//a = [1, 2, 3, 4, 5, 6, 7];
a = [2, 4, 5, 12, 55, 66, 7, 8, 90, 32, 3];

function reset(x) {
  j = -1;
  for (i = 0; i < x.length - 1; i++) {
    if (a[i] % 2 == 0) {
      j = j + 1;

      tmp = a[j];
      a[j] = a[i];
      a[i] = tmp;
    }
  }

  return a;
}

console.log(reset(a));
