// Write a function, `shuffledSentenceDetector(sentence1, sentence2)`, that
// returns true if the words in `sentence1` can be rearranged to form
// `sentence2`.

function shuffledSentenceDetector(sen1, sen2) {
    if (sen1.length !== sen2.length) return false;
    let words1 = sen1.split(" ");
    let words2 = sen2.split(" ");
    let obj = {}
    words1.forEach(w1 => {
        if (!obj[w1]) {
            obj[w1] = 1
        } else {
            obj[w1] += 1
        }
    });
    words2.forEach(w2 => {
        if (!obj[w2]) {
            obj[w2] = -1
        } else {
            obj[w2] -= 1
        }
    });

    for(key in obj) {
        if (obj[key] !== 0) {
            return false;
        }
    }
    return true;
}

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. 
//
// **Do NOT use the built-in `Array.prototype.forEach` method in your 
// implementation.**

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++){
        cb(this[i])
    }
}

// Write an `Array.prototype.myFilter(callback)` that takes a callback and
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. 
//
// **Do NOT use the built-in `Array.prototype.filter` or 
// `Array.prototype.forEach` methods in your implementation.**

Array.prototype.myFilter = function(cb) {
    let newArr = []

    this.myEach(ele => {
        if (cb(ele)) newArr.push(ele)
    })
    return newArr;
}

// Write a function `pairMatch(array, callback)`. It should return all pairs
// of indices ([i, j]) for which `callback(array[i], array[j])` returns true.
//
// NB: Keep in mind that the order of the arguments to the callback may matter.
// e.g., callback = function(a, b) { return a < b }

function pairMatch(arr, cb) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (cb(arr[i], arr[j]) && i !== j) {
                newArr.push([i, j])
            }
        }
    }

    return newArr;
}

// Write an `Array.prototype.mergeSort` method that merge sorts an array. It 
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. Make sure that 
// `merge` is defined on the window. 
//
// **Do NOT call the built-in `Array.prototype.sort` or `Array.prototype.sort_by`
// methods in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

Array.prototype.mergeSort = function(cb) {
    if (this.length <= 1) return this;
    if (!cb) {
        cb = (a, b) => {
            if (a < b) {
                return -1
            } else {
                return 1
            }
        }
    }
    let mid = Math.floor(this.length / 2);
    let left = this.slice(0, mid).mergeSort(cb);
    let right = this.slice(mid).mergeSort(cb);
    return merge(left, right, cb);
}

function merge(left, right, cb) {
    let arr = [];
    while(left.length && right.length) {
        if (cb(left[0], right[0]) === -1) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left, right);
}

// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.

Function.prototype.myBind = function(ctx, ...bindArgs) {
    const that = this;
    return function(...callArgs) {
        return that.apply(ctx, bindArgs.concat(callArgs))
    }
}


// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or 
// modify the `__proto__` property of any object directly.**

Function.prototype.inherits = function(ParentClass) {
    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

// Write a function `myCurry(fn, object, numArgs)`, that curries the function.
// Remember that a curried function is invoked with one argument at a time. For
// example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.

function myCurry(fn, obj, numArgs) {
    let nums = [];
    return function _myCurry(el) {
        nums.push(el)
        if (nums.length < numArgs){
            return _myCurry;
        } else {
            return fn.bind(obj)(...nums)
        }
    }
}