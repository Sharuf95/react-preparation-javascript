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

                  






const adding = "+"
const subractt = "-"
function calc(a,b,operation) {
return operation(a,b)
}
function add (a,b){
return a+b;
}
function subract(a,b){
return a-b;
}
const result1 = calc(10,2,add);
const result2 = calc(20,2,subract)
console.log(result1);
console.log(result2)










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
                                 





function returndata(a,b,c) {
                    console.log(`a = ${a}`)
                    console.log(`b = ${b}`)
                    console.log(`c = ${c}`)
                    
                    if (!c){
                    return "ab"
                    }
                    if (!b){
                    return "ac"
                    }
                    if (!a){
                    return "ba"
                    }
                     return {
                         a,
                         b,
                         c               
                     }
                    
                    }
                    returndata();
                    console.log(returndata("shaik","sharuf","zakeer"));
                    









function returndata(person1,person2,person3){
console.log(`person1 = ${person1}`)
console.log(`person2 = ${person2}`)
console.log(`person3 = ${person3}`) 
                     
if (!person1){
return "Go to home"
}
if (!person2){
return "Go to movie"
}
return {
person1,
person2,
person3
}
}  
                     

returndata("shaik","Sharuf","zakeer");
console.log(returndata("shaik","Sharuf","zakeer"));










var app = {
    friends:[],
    addfriend : function(name){
     app.friends.push(name);
     return app
    }
    
};
console.log(app.friends);   // []
app.addfriend("Shaik");    //  []
console.log(app.friends); // ["Shaik"]
app.addfriend("Sharuf");
console.log(app.friends); // ["Shaik", "Sharuf"]







const app = (function(){
    const friends = [];
    
    return {
      getfriends(){
        return friends;
      },
      addfriends(name){
        friends.push(name)
      }
    }
  })();
  
  
  console.log(app.friends); // undefined
  console.log(app.getfriends()); // []
  
  app.addfriends("sharuf");
  app.addfriends("shaik");
  app.addfriends("yesh");
  console.log(app.getfriends()); // ["sharuf", "shaik", "yesh"]
