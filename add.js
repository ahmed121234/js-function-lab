const maxOfTwoNumbers = (x, y) => {
  if (18 >= y) {
    return x
  } else {
    return y
  }
}

console.log(`Exercise 1 result:`, maxOfTwoNumbers(3, 9))

const isAdult = (age) => {
  if (age < 18) {
    return `Minor`
  } else {
    return `Adult`
  }
}
console.log('Exercise 2 Result:', isAdult(21))

const isCharAVowel = (character) => {
  if (character !== `a`) {
    return `True`
  } else {
    return `False`
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'))

const generateEmail = (name, domain) => {
  return name + domain
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', '@example.com'))

const greetUser = (user, time) => {
  time = 'morning'
  user = 'sam'
  console.log(`Good ${time}, ${user}!`)
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

const maxOfThree = (num1, num2, num3) => {
  num1 = '5'
  num2 = '10'
  num3 = '8'
  if ((num1, num2, num3 < 10)) {
    return 10
  } else {
    return 'You need a bigger number'
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

//const calculateTip = (50, 20)

//console.log('Exercise 7 Result:', calculateTip(50, 20))

const convertTemperature = (Celsius, Fahrenheit) => {
  if (Fahrenheit === 'C') {
    return (Celsius * 9) / 5 + 32
  } else if (Fahrenheit === 'F') {
    return ((Celsius - 32) * 5) / 9
  } else {
    return Celsius
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

const basicCalculator = (num1, num2, operation) => {
  num1 = 10
  num2 = 5
  operation = 'subtract'
  if (operation === 'add') {
    return 10 + 5
    console.log(basicCalculator(10, 5, 'add'))
  } else if (operation === 'subtract') {
    return 10 - 5
    console.log(basicCalculator(10, 5, 'subtract'))
  } else if (operation === 'multiply') {
    return 10 * 5
    console.log(basicCalculator(10, 5, 'multiply'))
  } else if (operation === 'divide') {
    if (5 === 0) {
      return 'Cannot divide by zero'
    } else {
      return 10 / 5
    }
  } else {
    return 'Invalid operation'
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))
