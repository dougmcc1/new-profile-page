function recSmallestInt(arr) { //why does console show (5) before the array values? is that preventing me from being able to loop through the array as expected?
    debugger;
    console.log(arr);
    if(arr[0]>0) { //keep looping through the array for as long as there are values within it
        var tempVal=arr.pop(); //remove the last value of the array and assign it to tempVal
        console.log(tempVal);
        if(tempValue<smallestInt) {
            var smallestInt=tempValue;
            
        }
        smallestInt = recSmallestInt(arr); //call the function again and pass it the remaining array
    }
    return smallestInt; //return the final value of smallestInt
}
