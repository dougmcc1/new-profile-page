
describe("using the Array.prototype.reduce function", function() {

  it("Use reduce to find the sum of the array, with a starting value of 100", function() {

    var callReduceOnThisArray = [1,2,3,4,5];
    spyOn(Array.prototype, 'reduce').and.callThrough();


    // ***** SOLUTION HERE *****

    var sum = function(arr) {
var accumulator = function(currentSum,nextVal) {
return currentSum + nextVal;
};
return Array.prototype.reduce(arr,0,accumulator);
    }
    sum(callReduceOnThisArray);
    //your code here!! use the Array method 'reduce' to find the sum of the above array

    expect(sum).toEqual(115);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

});
