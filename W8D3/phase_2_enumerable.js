// Instructions
// Again, monkey-patch the following methods to the Array class using swell new language we've been learning.

// Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)

const ARR = [1,2,3,4,5]

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}


// Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
// should use myEach and a closure
Array.prototype.myMap = function(cb) {
    const arr = [];
    this.myEach(ele => arr.push(cb(ele)));

    return arr
}

function squared(num) {
    return num * num;
}

console.log(ARR.myMap(squared))


// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)

// initialValue is optional and should default to the first element of the array if not provided
// examples:

// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6

// // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31
// should also use myEach

// NB [initialValue] is the conventional way for documentation to express that the args between [ and ] are optional inputs. Your function definition will not include these square brackets.

Array.prototype.myReduce = function(cb, acc) {
    if (acc === undefined) {
        acc = this.shift
    }

    this.myEach(ele => acc = cb(acc, ele));

    return acc;
}



// Recap
// Closures and callbacks are part of the foundation of JavaScript and provide us with a lot of flexibility and modularity in our code. Thanks to closures we can create higher order functions and "hide" private variables.

