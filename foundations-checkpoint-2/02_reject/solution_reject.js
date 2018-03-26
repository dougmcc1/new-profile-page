var reject = function (arr,func) {
newArr=[];
for(var i=0;i<arr.length;i++) {
    if (isNegNum(arr[i])===false) {
        newArr.push(arr[i]);
    } 
}
return newArr;
};
