//findSumPairs method will print all pairs
let findSumPairs = function (arr, sum) {
   arr.sort(function(a, b){return a-b});
   console.log(arr.toString());

   let low = 0;
   let high = arr.length - 1;
   let count = 0;
   while(low<high){
       if ((arr[low] + arr[high]) == sum) {
           console.log(arr[low] + " " + arr[high]);
           low++;
           high--;
           count++;
       }
       else if ((arr[low] + arr[high]) < sum) {
        low++;
       }
       else {
        high--;
       }           
   }
   if (count == 0)
        console.log("No Pairs Found!");
}

//driver code
let arr = [2,4,11,17,1,3,5];
let sum = 6;
findSumPairs(arr,sum);

