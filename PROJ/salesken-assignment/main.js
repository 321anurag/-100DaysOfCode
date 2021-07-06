function randomBool(){
    return Math.random()<.5; 
}
function randomVal(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var barGreeble = document.getElementById("bargreeble"),
context = barGreeble.getContext("2d"),
greebleWidth = barGreeble.width,
greebleHeight = barGreeble.height,

numBars = 18,
gapWidth = 3,
highBar = [],
lowBar = [],
initHeights = [],
rateOfChange = [],
uppyDowny = [],

for (var j = 0; j < numBars; j++) {
   initHeights[j] = randomVal(10,barGreeble.height - 10);
   highBar[j] = randomVal(initHeights[j],barGreeble.height);
   lowBar[j] = randomVal(0,10);
   rateOfChange[j] = randomVal(1,2);
   uppyDowny[j] = randomBool();
}
function randomBars() {
 context.clearRect(0,0,greebleWidth,greebleHeight);
for (var i = 0; i < numBars; i++) {
  uppyDowny[i] == true ? initHeights[i]+= rateOfChange[i] : 
    initHeights[i]-= rateOfChange[i];
  context.fillRect(barWidth * i + gapWidth * i, initHeights[i], barWidth, 100);
  if (initHeights[i] >= highBar[i]) {
    uppyDowny[i] = false;
  }
  if (initHeights[i] <= lowBar[i]) {
    uppyDowny[i] = true;
  } 
} 
  requestAnimationFrame(randomBars);
}


randomBars();