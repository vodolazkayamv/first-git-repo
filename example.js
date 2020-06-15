const findMin = require('find-min')

var myArgs = process.argv.slice(2)

let numbersArray = myArgs.map(Number)

console.log(myArgs)
console.log(numbersArray)

var min = numbersArray[0]

for (i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < min) {
        min = numbersArray[i]
    }
}

console.log("min is: ", min)
console.log("findMin min is: ", findMin(numbersArray))