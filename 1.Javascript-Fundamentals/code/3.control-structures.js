// java and python syntax will not run in .js file
function dev(developername,language) {
if(language === "nodejs") {
console.log(`Hello ${developername}`)
}else if (language === "python") {
console.log(`hello ${developername}`)
} else if (language === "java") {
console.log(`System output hello ${developername}`)
}else {
console.log(`Unsupported language: ${language}`)                   
}
return (developername,language)
}

dev("sharuf","abab")







function developer(developerName,language) {
let output = "";
if(language === "nodejs") {
output = `console.log("Hello ${developerName}!")`
}else if (language === "python"){
output = `print ("hello ${developerName}!")`
}else if (language === "java"){
output = `System.out.println("Hello ${developerName}!")`
}else {
output = "Unsupport language : ${language}"
}
return output;
}

developer("Sharuf","python")





function developerr(name,language) {
let output;
switch(language) {
case "nodejs":
output = console.log(`Hello ${name}`)
break;

case "python":
output = `print ("hello ${name}!")`
break;

case "java":
output =  `System.out.println("Hello ${name}!")`
break ;

default:
output = `Unsupport language : ${language}` 
break;                                
}
return output;
}






switch (Best_taste) {
    case RANKING_KB_HOTEL :
        console.log(chalk.bgCyan(`Chicken_Dum_Biryani_1st_Place`));
        break ;

        case RANKING_Mouraya_HOTEL :
            console.log(chalk.bgRed(`Chicken_fry_1st_Place`));
            break ;

            case RANKING_Ismail_HOTEL :
                console.log(chalk.bgYellow(`Cova_1st_Place`));
                break;
                
                default : 
                console.log ("NO OTHER FOODS")
 }
 
