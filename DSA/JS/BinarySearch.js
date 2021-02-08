// Iterative function to implement Binary Search 
let iterativeFunc = function (arr,x) {
    let low =0; 
    let high = arr.length -1;
    while(low <= high){
        mid = Math.floor((low+high)/2);
        if(x == arr[mid])
            return true;
        else if(x<arr[mid])
            high = mid-1;
        else if(x>arr[mid])
            low = mid+1;
    }
    return false;
}

// Driver code 
let arr = [1,3,5,6,90,101,345,674];
let x = 88;
if(iterativeFunc(arr,x)){
    console.log("ELEMENT FOUND");
}
else{
    console.log("ELEMENT NOT FOUND");
}
							 


