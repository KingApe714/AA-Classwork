// Overview
// Let's do a few slightly more involved problems with arrays. These should be pretty familiar.

// Instructions
// Write the following functions:

// Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm

Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                let num1 = this[i];
                let num2 = this[i+1];
                this[i] = num2;
                this[i+1] = num1;
                sorted = false;
            }
        }
    }
    return this
}

console.log([5,4,3,2,1].bubbleSort());
// String#substrings - receives a string, returns an array of all substrings

String.prototype.substrings = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            arr.push(this.slice(i, j+1));
        }
    }
    return arr;
}

console.log("ELLO".substrings())
// Recap
// These implementations should be almost identical to those we created in Ruby, with some differences in what we're allowed to use. There is no parallel assignment in JavaScript like we saw in Ruby, but we do get the destructuring assignment syntax. In addition to the += operator we had in Ruby, we now also have the ++ increment operator in JavaScript.