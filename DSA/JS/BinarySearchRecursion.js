// Recursive function to implement Binary Search
let recursiveFunct = function(arr,x,low,high){
        if(low > high)
            return false;
        let mid = Math.floor((low+high)/2);
        if(x==arr[mid])
            return true;
        if(x < arr[mid])
            recursiveFunct(arr,x,low, mid-1);
        if(x > arr[mid])
            recursiveFunct(arr,x,mid+1,high);
}

// Driver code 
let arr = [1,3,5,88,101,345,674];
let x = 88;
let high = arr.length-1
if(recursiveFunct(arr,x,0,high)){
    console.log("ELEMENT FOUND");
}
else{
    console.log("ELEMENT NOT FOUND");
}
