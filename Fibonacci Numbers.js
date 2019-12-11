
//Memoization and recursive
var Memoizer = (function(){
    //Private data
	var cache = {};
	//named functions are awesome!
	function cacher(func) {
		return function(){
		var key = JSON.stringify(arguments);
		if(cache[key]){
			return cache[key];
        } else {
			val = func.apply(this, arguments);
			cache[key] = val;
			return val;
		}
		}
	}    
    //Public data
	return{
		memo: function(func){
		return cacher(func);
		}
	}
})();

var fibonacciRecursive = Memoizer.memo(function(n) {
	if (n < 2){
		return 1;
	} else {
		return fibonacciRecursive(n-2) + fibonacciRecursive(n-1);
   }
});

var time = Date.now()
console.log(fibonacciRecursive(1))
console.log("Diff: " + (Date.now() - time) + " ms")

// Sum of n-th fibonnaci numbers
function sumFibonacci(n) {
  return fibonacciRecursive(n+2) - 1
}

/* Cache looks like 
{ ‘{“0”:0}’: 1,
‘{“0”:1}’: 1,
‘{“0”:2}’: 2,
‘{“0”:3}’: 3,
‘{“0”:4}’: 5,
‘{“0”:5}’: 8,
‘{“0”:6}’: 13,
‘{“0”:7}’: 21,
‘{“0”:8}’: 34,
‘{“0”:9}’: 55,
‘{“0”:10}’: 89,
‘{“0”:11}’: 144 } 
*/
