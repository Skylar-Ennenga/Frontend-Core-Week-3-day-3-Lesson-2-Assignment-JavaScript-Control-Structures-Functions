// Exploring Conditional Statements and Loops

// Objective: The aim of this assignment is to familiarize students with conditional statements and loops in JavaScript and enhance their problem-solving skills using these control structures.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience. The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

// Expected Outcomes:

//     Upon completion of this assignment, students should be able to understand how to use conditional statements to control program flow based on certain conditions.

//     Students should be able to implement loops to iterate through arrays and perform repetitive tasks efficiently.

//     Students will gain practical experience in solving real-world problems using JavaScript control structures.


let isLoggedIn = true
let storeItems = {"Banana" : 5, "Apple" : 4, "Orange": 3, "Pear": 6, "Strawberries" : 3, "Steak" : 11, "Chicken" : 7 }
let groceryList = ["Banana", "Pear", "Steak"]
let cartTotal = 0


if (isLoggedIn) {
    console.log(`Thanks for logging in you may now add items to the cart!`);
    console.log("Take a look at our items and determine what you would like: ")
    for (const i in storeItems){
        console.log(`Store Item: ${i} Price: ${storeItems[i]}`)
      }
      console.log(`Looks like you need: `)
    for (const item of groceryList) {
        console.log(item)
        if (item in storeItems) {
            cartTotal += storeItems[item];
        }
    }
    console.log(`With those items your cart total is: $${cartTotal}`);
} else {
    console.log("Please log in to continue.");
}

// Exploring Functions in JavaScript

// Objective: The aim of this assignment is to deepen students' understanding of functions in JavaScript and their various applications in solving programming problems.

// Problem Statement: Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.

// Task 1: Create a function to handle deposits into a bank account.

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

// Task 3: Develop a function to check the current balance of the account.

// Expected Outcomes:

//     After completing this assignment, students should demonstrate proficiency in creating and using functions to perform specific tasks.

//     Students should understand the importance of function modularity and reusability in programming.

//     This assignment will enable students to apply their knowledge of functions to practical scenarios, such as banking operations, thereby enhancing their problem-solving skills.


let bankAccount = 25
console.log(`Starting Balance: $${bankAccount}`)


function withdrawals(withdrawl){
    if (withdrawl < bankAccount){
        newBalance = bankAccount - withdrawl
        bankAccount = newBalance
        return `You have withdrawn $${withdrawl} and your remaining balance is $${newBalance}`
    }
    else{
        return `$${withdrawl} is more then your current balance of $${bankAccount}`
    }

}

console.log(withdrawals(9))

function deposits(deposit){
    newBalance = bankAccount + deposit
    bankAccount = newBalance
    return `You have deposit $${deposit} your new balance is $${newBalance}`

}

console.log(deposits(10))


function currentBalance(){
    return `Your new balance is: $${bankAccount}`
}

console.log(currentBalance())



