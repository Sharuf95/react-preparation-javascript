var xyz = 100

function printnumber (placeholder){
console.log(placeholder)
};

printnumber(xyz)    // 100
printnumber("xyz") // xyz Undefined




function add(a,b){
return a+b;
}
                  
function subract(a,b){
return a-b;
}
                  
function multiply(a,b){
return a*b;
}
                  
function division(a,b){
return a/b;
}

           // 10,   20  , function
function calc(a = 0,b= 0,operator){
return operator()
}
               
const addition       = add(10,20);
const Minus          = subract(10,20);
const Multiplication = multiply(10,20);
const Div            = division(10,20);
                  
console.log(addition);
console.log(Minus)
console.log(Multiplication)
console.log(Div)

                  







const add = "+";
const subract = "-";
const multiply = "*";
const division = "/";
                  

calc();

function calc(a,b,operator){
let total ;
switch(operator){
case add:
total = a+b;
break;
case subract :
total = a-b;
break;
case multiply:
total = a*b;
break;
case division:
total = a/b;
break;
default:
total = NaN;
                        
}
return total;
}
                                 











