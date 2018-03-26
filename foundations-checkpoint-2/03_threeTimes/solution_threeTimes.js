/*
var threeTimes = function (func) {
var total=0;
    //for (var i = 1; i < 3; i++) {
        if (total<15) {
            //var returnFive = function (counter) {
                return function returnFive() {
               total += 5;
               //return 5;
               // return returnFive(5);
               console.log(func);
               //return n;
            }
           // return total;
        }

    //}

};
*/

var funcCalls = 0;
/*
var threeTimes=function(func) {
funcCalls++;
if (funcCalls<3) {
//the function may be called again
}
};
*/

function threeTimes(func) {
    funcCalls++;
    if (funcCalls < 3) {
        return func;
    }

}

