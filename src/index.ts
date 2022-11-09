/**
 * Factorial
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-09
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

function factorial(someInt: number): number {
  if (someInt < 0) {
    return -1
  } else if (someInt === 0) {
    return 1
  } else {
    return someInt * factorial(someInt - 1)
  }
}

// Input
const inNonNum = prompt('Please input a string to reverse: ')
const numIn = parseInt(inNonNum)

// Output
console.log()
console.log(`The factorial of ${numIn} is ${factorial(numIn)}`)

// Done
console.log('\nDone.')
