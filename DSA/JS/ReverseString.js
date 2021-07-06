var reverse = function (x) {
  var Flag = false;
  if (x < 0) {
    x = x * -1;
    Flag = true;
  }
  x = String(x);
  x = parseInt(x.toString().split("").reverse().join(""));

  if (Flag) x = x * -1;
  if (x > 2147483648 || x < -2147483647) return 0;
  else return x;
};

a = 1234;
a = reverse(a);
console.log(a);
