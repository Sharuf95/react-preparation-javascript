const person = {
   "name"  : "Sharuf",
    "job"  : "UI dev",
    "info" : function (){
console.log(`${person.name} is working as a ${person.job}`)
}
}
console.log(person);
console.log(person.job); // "UI dev"
console.log(person["name"]); // "Sharuf"
person.info(); // "Sharuf is working as a UI dev"
                
         

                
                

 function info () {
 console.log(`${this.name} is working as a ${this.job}`)
}
 const Shaik = new Object();
 Shaik.name = "Sharuf";
 Shaik.job ="full stack";
 Shaik.details = info;
 Shaik.details(); // "Sharuf is working as a full stack"
                
     
 
 


 function infodetails() {
 console.log(`${this.name} is working as a ${this.job}`)
 }
 const Man = {
 "name" : "sharuf",
 "job"  : "UI dev",
 "info" : infodetails
 }
 Person.info() // "sharuf is working as a UI dev"
                  
                  
 const developer = {
 "name" : "Yesh",
 "job"  : "fullStack_Dev",
 "info" : infodetails
 }
 developer.info(); // "Yesh is working as a fullStack_Dev"
                                 
 const manager = {
 "name" : "Shaik",
 "job"  : "Manager_lead",
 "info" : infodetails
 }
 manager.info() // "Shaik is working as a Manager_lead"






 function info() {
   console.log(`${this.name} is working as a ${this.job}`)
 }
 const Person = {
  "name" : "Yesh",
  "job"  : "UI dev",
  }
 info.call (Person); // "Yesh is working as a UI dev"
 
 const shaik = new Object();
 shaik.name = "Sharuf";
 shaik.job = "full_stack_Dev"
 
 info.call(shaik); // "Sharuf is working as a full_stack_Dev"
 





 function info() {
   console.log(`${this.name} is working as a ${this.job}`)
 }
 
 function printdetails () {
   console.log(`
         Name is ${this.name}
         job is  ${this.job}`)
 }
 
 const shaik = new Object();
 shaik.name = "Sharuf";
 shaik.job = "full_stack_Dev";
 
 const sharuf = new Object();
 sharuf.name = "yesh";
 sharuf.job = "full_stack_Dev";
 
  // printdetails.call(shaik);   //  Name is Sharuf,job is  full_stack_Dev"
 // printdetails.call(sharuf);  //   Name is Sharuf,job is  full_stack_Dev"
 
 const users = [shaik,sharuf];  //  Name is Sharuf,job is  full_stack_Dev"
                               //   Name is Sharuf,job is  full_stack_Dev"
 users.forEach( users => printdetails.call(users)) 
 // we can write like using forEach method and for loop method also 
 // for loop ARRAy ni iterate cheyadaniki use chestham
 for(let i = 0; i < users.length;i++){    //  Name is Sharuf,job is  full_stack_Dev"
   printdetails.call(users[i])           //   Name is Sharuf,job is  full_stack_Dev"
 }


 



 function User(username,userjob) {
   this.name = username;
   this.job = userjob;
   this.info = function() {
     console.log(`${this.name} is working as a ${this.job}`)
   }
 } 
 
 const shaik = new User("sharuf","UI")
 shaik.info(); // // "sharuf is working as a UI"
 
 const zakeer = new User("Syed","full Stack Dev")
 zakeer.info(); // "Syed is working as a full Stack Dev"
 
 const sharuf = new User("hussain","Engineer");
 sharuf.info(); // "hussain is working as a Engineer"

 