const arrayPrototypeMethods = [{
    "Mutators": [{
        "method": ".pop()",
        "id": 1,
        "description": "Removes the last element from an array and returns that element.",
        "parameters": "none",
        "syntax": "arr.pop()",
        "answers": [".push()", ".shift()", ".pop()", ".sort()", ".splice()", ".unshift()"]
      },
      {
        "method": ".push()",
        "id": 2,
        "description": "Adds one or more elements to the end of an array and returns the new length of the array.",
        "parameters": "The elements to add to the end of the array",
        "syntax": "arr.push(element1[, ...[, elementN]])",
        "answers": [".pop()", ".sort()", ".push()", ".shift()", ".splice()", ".unshift()"]
      },
      {
        "method": ".shift()",
        "id": 3,
        "description": "Removes the first element from an array and returns that element.",
        "parameters": "none",
        "syntax": "arr.shift()",
        "answers": [".pop()", ".sort()", ".shift()", ".splice()", ".unshift()", ".push()"]
      },
      {
        "method": ".sort()",
        "id": 4,
        "description": "Sorts the elements of an array in place and returns the array.",
        "parameters": "Optional function, first element to compare, second element to compare",
        "syntax": "arr.sort([compareFunction])",
        "answers": [".pop()", ".sort()", ".shift()", ".splice()", ".unshift()", ".push()"]
      },
      {
        "method": ".splice()",
        "id": 5,
        "description": "Adds and/or removes elements from an array.",
        "parameters": "startIndex, optional deleteCount, optional item(s) to be added",
        "syntax": "array.splice(start[, deleteCount[, item1[, item2[, ...]]]])",
        "answers": [".pop()", ".sort()", ".shift()", ".splice()", ".unshift()", ".push()"]
      },
      {
        "method": ".unshift()",
        "id": 6,
        "description": "Adds one or more elements to the front of an array and returns the new length of the array.",
        "parameters": "The elements to add to the front of the array",
        "syntax": "arr.unshift(element1[, ...[, elementN]])",
        "answers": [".pop()", ".sort()", ".shift()", ".splice()", ".unshift()", ".push()"]
      }
    ]
  },
  {
    "Iterators": [{
        "method": ".filter()",
        "id": 7,
        "description": "Creates a new array with all of the elements for which the provided function returns true.",
        "parameters": "Callback function which takes in current element and optional index, array, thisArg",
        "syntax": "arr.filter(callback(element[, index[, array]])[, thisArg])",
        "answers": [".find()", ".forEach()", ".filter()", ".map()", ".reduce()"]
      },
      {
        "method": ".find()",
        "id": 8,
        "description": "Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
        "parameters": "Callback function which takes in current element and optional index, array, thisArg",
        "syntax": "arr.find(callback[, thisArg])",
        "answers": [".forEach()", ".find()", ".filter()", ".map()", ".reduce()"]
      },
      {
        "method": ".forEach()",
        "id": 9,
        "description": "Executes a provided function once for each array element and returns undefined.",
        "parameters": "Callback function which takes in current element and optional index, array, thisArg",
        "syntax": "arr.forEach(function callback(currentValue[, index[, array]]){ //your iterator }[, thisArg])",
        "answers": [".forEach()", ".find()", ".filter()", ".map()", ".reduce()"]
      },
      {
        "method": ".map()",
        "id": 10,
        "description": "Creates a new array with the results of calling a provided function on every element and returns array of same length.",
        "parameters": "Callback function which takes in current element and optional index, array, thisArg",
        "syntax": "arr.map(function callback(currentValue[, index[, array]]) {// Return element for new_array}[, thisArg])",
        "answers": [".forEach()", ".find()", ".filter()", ".map()", ".reduce()"]
      },
      {
        "method": ".reduce()",
        "id": 11,
        "description": "Apply a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.",
        "parameters": "Callback function which takes in an accumulator, current element and optional index, array, initialValue",
        "syntax": "arr.reduce(callback[, initialValue])",
        "answers": [".forEach()", ".find()", ".filter()", ".map()", ".reduce()"]
      }
    ]
  },
  {
    "Accessors": [{
        "method": ".concat()",
        "id": 12,
        "description": "Merges two or more arrays and does not change the existing arrays, but instead returns a new array.",
        "parameters": "Arrays and/or values to concatenate into a new array.",
        "syntax": "old_array.concat([value1[, value2[, ...[, valueN]]]])",
        "answers": [".includes()", ".slice()", ".concat()", ".join()", ".indexOf()"]
      },
      {
        "method": ".includes()",
        "id": 13,
        "description": "Determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
        "parameters": "The value to search for and optional startIndex",
        "syntax": "arr.includes(valueToFind[, fromIndex])",
        "answers": [".includes()", ".slice()", ".concat()", ".join()", ".indexOf()"]
      },
      {
        "method": ".indexOf()",
        "id": 14,
        "description": "Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.",
        "parameters": "Element to locate and optional startIndex",
        "syntax": "arr.indexOf(searchElement[, fromIndex])",
        "answers": [".includes()", ".slice()", ".concat()", ".join()", ".indexOf()"]
      },
      {
        "method": ".join()",
        "id": 15,
        "description": "Creates and returns a new string by concatenating all of the elements in an array (or array-like object), separated by commas or a specified separator string.",
        "parameters": "Optional separator",
        "syntax": "arr.join([separator])",
        "answers": [".includes()", ".slice()", ".concat()", ".join()", ".indexOf()"]
      },
      {
        "method": ".slice()",
        "id": 16,
        "description": "Returns a portion of an array into a new array selected from begin to end (end not included in new array).",
        "parameters": "Optional startIndex(otherwise starts at 0), negative value that extracts from end, and index to end",
        "syntax": "arr.slice([begin[, end]])",
        "answers": [".includes()", ".slice()", ".concat()", ".join()", ".indexOf()"]
      }
    ]
  }
];
const stringPrototypeMethods = [{
    "method": ".charAt()",
    "id": 17,
    "description": "Returns a new string (exactly one UTF-16 code unit) at the specified index.",
    "parameters": "Index (if index omitted, default is 0)",
    "syntax": "str.charAt(index)",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".concat()",
    "id": 18,
    "description": "Combines string arguments and returns a new string",
    "parameters": "String(s) to concatenate to calling string",
    "syntax": "str.concat(string2[, string3, ..., stringN])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".includes()",
    "id": 19,
    "description": "Determines whether one string may be found within another string, returning true or false as appropriate.",
    "parameters": "String to search for in calling string and optional startIndex",
    "syntax": "str.includes(searchString[, position])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".indexOf()",
    "id": 20,
    "description": "Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.",
    "parameters": "A string representing the value to search for and optional startIndex",
    "syntax": "str.indexOf(searchValue[, fromIndex])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".padEnd()",
    "id": 21,
    "description": "Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.",
    "parameters": "Target length and optional string to pad with",
    "syntax": "str.padEnd(targetLength [, padString])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".repeat()",
    "id": 22,
    "description": "Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
    "parameters": "An integer indicating the number of times to repeat the string",
    "syntax": "str.repeat(count)",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".slice()",
    "id": 23,
    "description": "Extracts a section of a string and returns a new string, without modifying the original string.",
    "parameters": "StartIndex and optional endIndex",
    "syntax": "str.slice(beginIndex[, endIndex])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".split()",
    "id": 24,
    "description": "Splits a string into an array of strings by separating the string into substrings, using a specified separator string.",
    "parameters": "Optional separator and integerLimit specifying a limit on the number of splits",
    "syntax": "str.split([separator[, limit]])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".substring()",
    "id": 25,
    "description": "Returns the part of the string between the start and end indexes, or to the end of the string.",
    "parameters": "StartIndex and optional endIndex",
    "syntax": "str.substring(indexStart[, indexEnd])",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".toLowerCase()",
    "id": 26,
    "description": "Returns the calling string value converted to lower case.",
    "parameters": "none",
    "syntax": "str.toLowerCase()",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".toUpperCase()",
    "id": 27,
    "description": "Returns the calling string value converted to uppercase.",
    "parameters": "none",
    "syntax": "str.toUpperCase()",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  },
  {
    "method": ".trim()",
    "id": 28,
    "description": "Trims whitespace from the beginning and end of the string.",
    "parameters": "none",
    "syntax": "str.trim()",
    "answers": [".slice()", ".charAt()", ".concat()", ".trim()", ".split()", ".includes()", ".toLowerCase()", ".indexOf()", ".padEnd()", ".toUpperCase()", ".substring()", ".repeat()"]
  }
];
const objectPrototypeMethods = [{
    "method": "Object.keys()",
    "id": 29,
    "description": "Used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.",
    "parameters": "Target object and source object",
    "syntax": "Object.keys(obj)",
    "answers": ["Object.keys()", "Object.assign()"]
  },
  {
    "method": "Object.assign()",
    "id": 30,
    "description": "Returns an array of a given object's own property names, in the same order as we get with a normal loop.",
    "parameters": "Source object",
    "syntax": "Object.assign(target, ...sources)",
    "answers": ["Object.keys()", "Object.assign()"]
  }
];


module.exports = { arrayPrototypeMethods, stringPrototypeMethods, objectPrototypeMethods };