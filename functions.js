// UNDERSTANDING AND CREATING FUNCTIONS

/* Function Declaration, Parameters, and Return Values 
- Functions are reusable blocks of code that perform a specific task.
- Functions can take input values called parameters and return output values.

- Functions can be declared using the function keyword followed by a name and a block of code enclosed in curly braces.
- Parameters are placeholders for values that a function expects to receive when it's called. 
- The return statement specifies the value to be returned when the function is invoked. */

function greet(name){
    return "Hello, " + name + "!"; 
  }
  
  console.log(greet("John Doe")); 
  
  // The same function python 
  
  // def greet2(incomingName){
  //   return "Hello, " + incomingName + "!"
  // }
  // print(greet2("John Doe"))
  
  
  /* SCOPES AND CLOSURES
  Scope refers to the visibility of variables within a program.
  
  Global Scope: Variables declared outside of any function are global and can be accessed from anywhere in the program.
  Local Scope: Variables declared inside a function are local to that function and cannot be accessed outside of it.
  
  Variables declared inside a function are local to that function and cannot be accessed outside of it.
  Variables declared outside of any function are global and can be accessed from anywhere in the program. */
  
  function outer(){
    let message = "Hello"; 
  
    function inner(){
      console.log(message); // Accessing the message from the outer scope (global)
    }
  
    // You cannot access inner() variable in outer() function
    // console.log(newMessage);  
    return inner; // Message prints hello 
  }
  
  let myFunc = outer();
  myFunc();
  
  
  function outerFunc(){
  
    function innerFunc(){
      
    }
  
  }
  
  
  /* ARROW FUNCTIONS: more concise syntax for writing functions.
  Lexical this Binding: Arrow functions do not have their own this value. They inherit the this value from the surrounding code.
  No Binding of arguments: Arrow functions do not have an arguments object.
  Implicit return: If the function body consists of a single expression, it is implicitly returned. */
  
