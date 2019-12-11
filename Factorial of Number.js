
// Memoization and recursive

var Memoizer = (function(){
    //Private data
   var cache = {};
   //named functions are awesome!
   function cacher(func){
      return function(){
        var key = JSON.stringify(arguments);
        if(cache[key]){
          return cache[key];
        }
        else{
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
})()

var factorialRecursive = Memoizer.memo(function(n) {
  if (n === 0) { return 1 } 
  else { return n * factorialRecursive(n - 1) }
});

var time = Date.now()
console.log(factorialRecursive(14))
//Calculator check > 87178291200 for n = 14
console.log("Diff: " + (Date.now() - time) + " ms")
