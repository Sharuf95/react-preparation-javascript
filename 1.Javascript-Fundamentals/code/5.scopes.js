//1. global scope: Global scope refers to variables that are defined/create outside of any function.
let names = "Sharuf"
function greet() {
  console.log(names); // here `name` is global scope variable
}



//2. local scope: Local scope referes to variables that are defined/create within a function. Any variables that are define/create within the function are only accessible within that function, and are not visible outside of it.
function greet() {
  let name = "Sharuf"
  console.log(name); // here `name` is local scope variable
}
console.log(name); // ERROR: ReferenceError: name is not defined

