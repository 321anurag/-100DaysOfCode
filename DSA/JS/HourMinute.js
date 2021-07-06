//input integer
//hour and minutes

function time(x) {
  m = x % 60;
  h = (x - m) / 60;
  s = h + ":" + m;
  return s;
}

display = time(150);
console.log(display);
