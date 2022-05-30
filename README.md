# Calculate the Mode 

## In this challenge you will need to:
- Break a large problem down into smaller steps using pseudocode
- Iterate through data structures and manipulate the content
- Determine which data structure (arrays or hashes) to use based on challenge requirements

## Let's begin
The method `calculate_mode` will take an `List` of numbers or strings as its input and return an `List` of the most frequent values.

If there's only one most-frequent value, it returns a single-element `List`.

For example:

```python
calculate_mode([1,2,3,3])         # => [3]
calculate_mode([4.5, 0, 0])       # => [0]
calculate_mode([1.5, -1, 1, 1.5]) # => [1.5]
calculate_mode([1,1,2,2])         # => [1,2]
calculate_mode([1,2,3])           # => [1,2,3], because all occur with equal frequency
calculate_mode(["who", "what", "where", "who"]) # => ["who"]
```

Remember to always write tests!

 <!-- let obj = {}

// //check if the input is either a strong or a number
//     if (typeof info[0] == "string") {
// // sort the data and the iterate through it to find the items that repeate the most. 
//         let sortedArr = info.sort()
//         for (let i = 0; i < info.length; i++) {
//             if (!obj.hasOwnProperty(sortedArr[i])) {
//                 obj[[sortedArr[i]]] = 1
//             } else {
//                 obj[[sortedArr[i]]] += 1
//             }
//         } obj
//     } else {
//         let sortedArrNum = info.sort()
//         for (let i = 0; i < info.length; i++) {
//             if (!obj.hasOwnProperty(sortedArrNum[i])) {
//                 obj[[sortedArrNum[i]]] = 1
//             } else {
//                 obj[[sortedArrNum[i]]] += 1
//             }
//         }

//     // let values = Object.values(obj)
//     // let max = Math.max(...values)
//     }  obj
//     let values = Object.values(obj)
//     let maxValue = Math.max(...values)
//     let answer = []

//     function getKeyByValue(obj, maxValue) {
//         for (let prop in obj) {
//             if (obj.hasOwnProperty(prop)) {
//                 if (obj[prop] === maxValue)
//                 answer.push(prop)
//             }
//         }
//     } 
//     getKeyByValue(obj, maxValue)
//     return answer
// }

// // console.log(calculateMode(["who", "what", "where", "who", 'what']))
// console.log(calculateMode([1.2, 1]))
// // let trial = ["who", "what", "where", "who"]
// // console.log(trial.sort())


//------------------------

// const calculateMode = (info) => {
//     let obj = {}

//     for (let i = 0; i < info.length; i++) {
//         if (!obj.hasOwnProperty(info[i])) {
//             obj[[info[i]]] = 1
//         } else {
//             obj[[info[i]]] += 1
//         }
//     } obj

//     let values = Object.values(obj)
//     let maxValue = Math.max(...values)
//     let answer = []

//     function getKeyByValue(obj, maxValue) {
//         for (let prop in obj) {
//             if (obj.hasOwnProperty(prop)) {
//                 if (obj[prop] === maxValue)
//                     answer.push((prop))
//             }
//         }
//     }
//     getKeyByValue(obj, maxValue)
//     return answer
// }
// // console.log(calculateMode(["who", "what", "where", "who", 'what']))
// console.log(calculateMode([1.2, 1, 1,3,3,3,4,4,4]))

// // // let trial = ["who", "what", "where", "who"]
// // console.log(trial.sort())
// let trial = ['a', 'b','b']
// console.log(Math.max(...trial))


//----------- -->