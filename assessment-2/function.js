// 1.Create one function with zero parameter having a console statement;
function one(){
    console.log("hello")
}
one();
// 2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    let c=a+b;
    console.log( "Sum of 4,3 is " + c);
}
sum(4,3);
// 3.Create one arrow function
let div=(n) =>{
   n=n/10;
   console.log(n);
}
div(100);
// 4.Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
// 5.Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//  6.Write a function that accepts parameter n and returns factorial of n
function factorial(n){
    let f=1;
    for(let i=1;i<=n;i++)
    f=f*i;
    return f;       
} 
factorial(4);

// 7.Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
