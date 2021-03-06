// Let's take a little while to create a few (hopefully familiar) functions. These should give you some experience iterating over and mutating arrays.

// Instructions
// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.

// Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array

Array.prototype.uniq = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i])
        }
    }
    return arr
}

console.log([1,2,2,3,3,3].uniq()) //=> [1,2,3])
// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.twoSum = function() {
    let arr = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                arr.push([i,j]);
            }
        }
    }
    return arr
}

console.log([1,2,-1,0,-4,0,3,-1,5].twoSum())
// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array

Array.prototype.transpose = function() {
    let arr = [];
    for (let i = 0; i < this[0].length; i++) {
        let inner = [];
        for (let j = 0; j < this.length; j++) {
            inner.push(this[j][i]);
        }
        arr.push(inner);
    }
    return arr;
}

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose())
// Recap
// That was super fun, right?