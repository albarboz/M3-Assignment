let num1 = parseInt(prompt('Enter the first number'))
let num2 = parseInt(prompt('Enter the second number'))

if (num1 > num2) {
    document.write('The larger number is: ', num1)
} else if (num1 < num2) {
    document.write('The larger number is: ', num2)
} else {
    document.write("Both numbers are equal: " + num1);
}



/*
Updated version: 

let num1 = parseInt(prompt('Enter the first number'))
let num2 = parseInt(prompt('Enter the second number'))

const messsage = (num1 === num2) ? `Both numbers are equal to: ${num1}` : `The larger number is: ${Math.max(num1, num2)}`
document.write(messsage)

*/
