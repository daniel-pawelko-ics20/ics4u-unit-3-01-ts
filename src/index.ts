/**
 * Reverse a string
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

function reverseString(str: string): string {
  if (str === '') {
    return str
  } else {
    return reverseString(str.slice(1)) + str.slice(0, 1)
  }
}

// Input
const aString = prompt('Please input a string to reverse: ')

// Output
console.log()
console.log(`The original string is: ${aString}`)
console.log(`The reversed string is: ${reverseString(aString)}`)

// Done
console.log('\nDone.')

