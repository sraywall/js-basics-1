const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(`                                                                               
                                                                               
___      ___      ___      ___                   ___      __      ___   /  
//   ) ) //   ) ) ((   ) ) ((   ) ) //  / /  / / //   ) ) //  ) ) //   ) /   
//___/ / //   / /   \ \      \ \    //  / /  / / //   / / //      //   / /    
//       ((___( ( //   ) ) //   ) ) ((__( (__/ / ((___/ / //      ((___/ /     `);
console.log(`                                                                 
                                                                 
___     / __      ___      ___     / ___      ___      __    
//   ) ) //   ) ) //___) ) //   ) ) //\ \     //___) ) //  ) ) 
//       //   / / //       //       //  \ \   //       //       
((____   //   / / ((____   ((____   //    \ \ ((____   //        `)
console.log("Welcome to the password validator tool!")
reader.question("Please enter a password to validate: ", function(input){
    if(input.length >= 10){
        console.log("password meets length requirement")
    } else {
        console.log("password length is insufficient!")
        console.log(
    `         _______                       _ 
        (_______)                     | |
         _____    ____ ____ ___   ____| |
        |  ___)  / ___) ___) _ \ / ___)_|
        | |_____| |  | |  | |_| | |    _ 
        |_______)_|  |_|   \___/|_|   |_|
                                         `)
        return;
    }

    if(input.toUpperCase() === input && input.toLowerCase() === input){
        console.log("password contains no letters!")
    } else if(input.toUpperCase() === input){
        console.log("password contains no lower case letters!")
    } else if (input.toLowerCase() === input){
        console.log("password contains no upper case letters!")
    } else {
        console.log("password has at least one uppercase letter and one lower case letter:")
        console.log(                                      
    `        ___ _   _  ____ ____ ____  ___  ___ 
       /___) | | |/ ___) ___) _  )/___)/___)
      |___ | |_| ( (__( (__( (/ /|___ |___ |
      (___/ \____|\____)____)____|___/(___/ 
                                            `)
    }

    
});
