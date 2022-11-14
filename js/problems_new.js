//Find unique items from a array

//['abc', 'xyz', 'abc', 'pgd']
let inputArr = [1, 5, 6, 1, 3, 8, 6];

let findUnique = (inputData) => {
  let inputFormatted = inputData.sort();
  let previousItem;
  let uniqueItems = inputFormatted.filter((item) => {
    if (item == previousItem) {
      return false;
    } else {
      previousItem = item;
      return true;
    }
  });
  return uniqueItems;
};

console.log(findUnique(inputArr));

//Problem : 2
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(strarr, k) {
  if (k <= 0 || strarr.length == 0 || k > strarr.length) {
    return "";
  }
  let valueSet = new Map();
  let largest;
  for (let i = 0; i < strarr.length; i++) {
    let concatString = strarr[i];
    let count = i + k;
    for (let j = i + 1; j < count; j++) {
      if (!strarr[j]) break;
      concatString = concatString.concat(strarr[j]);
    }
    let length = concatString.length;
    if (!largest || largest < length) largest = length;
    if (!valueSet.has(length)) {
      valueSet.set(length, concatString);
    }
  }
  let largestString = valueSet.get(largest);
  return largestString;
}

//Optimal Solution :

function longestConsecOptimal(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);

//Problem 3:

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let currentSum = numbers[i] + numbers[j];
      if (currentSum == target) {
        result = [i, j];
      }
    }
  }
  return result;
}

console.log(twoSum([1, 2, 3], 4)); // returns [0, 2]

function twoSumOptimal(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i],
      y = target - x;
    if (seen.has(y)) return [seen.get(y), i];
    seen.set(x, i);
  }
}

console.log(twoSumOptimal([1, 2, 3], 4));

function findOutlier(integers) {
  let overviewMap = new Map();
  overviewMap.set(0, 0);
  overviewMap.set(1, 0);
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      overviewMap.set(0, integers[i]);
      evenCount++;
    } else {
      overviewMap.set(1, integers[i]);
      oddCount++;
    }
    if (i > 1) {
      if (oddCount > 1 && evenCount == 1) {
        return overviewMap.get(0);
      }
      if (evenCount > 1 && oddCount == 1) {
        return overviewMap.get(1);
      }
    }
  }
}

console.log(findOutlier([-122604557, 51903902, 178449840]));

// Problem 4
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))(("

function duplicateEncode(word) {
  word = word.toLowerCase();
  let wordArray = word.split("");
  let output = "";
  for (let i = 0; i < wordArray.length; i++) {
    let count = 1;
    for (let j = 0; j < wordArray.length; j++) {
      if (i == j) continue;
      if (wordArray[i] == wordArray[j]) {
        count++;
        break;
      }
    }
    if (count > 1) {
      output = output.concat(")");
    } else {
      output = output.concat("(");
    }
  }
  return output;
}

function scramble(str1, str2) {
  const t0 = performance.now();
  let firstString = str1.split("");
  let charMap = new Map();
  let isValid = true;
  firstString.forEach((item) => {
    if (charMap.get(item)) {
      charMap.set(item, charMap.get(item) + 1);
    } else {
      charMap.set(item, 1);
    }
  });
  let secondString = str2.split("");

  secondString.forEach((item) => {
    if (charMap.get(item)) {
      charMap.set(item, charMap.get(item) - 1);
    } else {
      isValid = false;
    }
  });
  const t1 = performance.now();
  console.log(t1 - t0, "milliseconds");
  return isValid;
}

function scramble1(str1, str2) {
  const t0 = performance.now();
  let stringArrayOne = str1.split("");
  let stringArrayTwo = str2.split("");
  let isValid = true;
  stringArrayTwo.forEach((item) => {
    let index = stringArrayOne.indexOf(item);
    if (index > -1) {
      stringArrayOne.splice(index, 1);
    } else isValid = false;
  });
  const t1 = performance.now();
  console.log(t1 - t0, "milliseconds");
  return isValid;
}

console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble1("cedewaraaossoqqyt", "codewars"));

//Problem : 5
// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.


function sumIntervals(intervals) {
  let isOverlap = true;
  let loopInterval = [];
  let totalSum = 0;
  while(isOverlap) {
    let intArray = loopInterval.length == 0 ? intervals : loopInterval;
    isOverlap = findOverlap(intArray) 
  }
  console.log(loopInterval);
  if (loopInterval && loopInterval.length > 0) {
    loopInterval.forEach(e => {
        totalSum = totalSum + (e[1] - e[0]);
    })
  }
  return totalSum;
  function findOverlap(intArray) {
    loopInterval= [];
    let start, end;
    let overlapFlagOveral = false;
    for (let i = 0; i < intArray.length; i++) {
        const [a, b] = intArray[i];
        let indexToClear;
        for (let j = 0; j < intArray.length; j++) {
            overlapFlag = false;
            if (i == j) continue;
            if (overlapFlagOveral) break;
            const [c, d] = intArray[j];
            if ((a >= c && a <= d) || (b >= c && b <= d) || (c >= a && c <= b) ||  (d >= a && d <= b)) {
                overlapFlag = true;
                overlapFlagOveral = true;
                start = a < c ? a : c;
                end = b > d ? b : d;
                indexToClear = j;
                break;
            }
          }
          if (overlapFlag) {
            let newArr = [start, end]
            loopInterval.push(newArr);
            intArray.splice(indexToClear, 1);
          } else {
            loopInterval.push(intArray[i])
          }
        }
        return overlapFlagOveral;
   }
}

console.log(sumIntervals([ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]))
//Better solution 

function sumIntervalsOp(intervals) {
    intervals = intervals.sort((a, b) => {
        let abc = a[0] - b[0]
        if (abc == 0) {
            abc = a[1] - b[1]
        }
        return abc;
    });
    let newInt = [];
    let skipIndex = []
    let totalSum = 0;
    for (let i = 0; i < intervals.length; i++) {
        let [a, b] = intervals[i];
        for (let j = 0; j < intervals.length; j++) {
            if (i == j) continue;
            let [c, d] = intervals[j];
            if ((a >= c && a <= d) || (b >= c && b <= d) || (c >= a && c <= b) ||  (d >= a && d <= b)) {
                start = a < c ? a : c;
                end = b > d ? b : d;
                intervals[i] = [start, end];
                [a, b] = intervals[i];
                skipIndex.push(j);
               // break;
            }
          }
          if (!skipIndex.includes(i)) {
            newInt.push(intervals[i])
          }
    }
    if (newInt && newInt.length > 0) {
        newInt.forEach(e => {
            totalSum = totalSum + (e[1] - e[0]);
        })
      }
    return totalSum;
}
console.log(sumIntervalsOp([ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]))

 //Problem 6
// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

const findSum = n => {
    let sum = 0;
    for(let i=1;i<=n;i++) {
      sum += i;
    }
    return sum;
  }
  
  function removeNb (n) {
    console.log(n)
    let sum = findSum(n);
    let output = []
    for (let i=1;i<=n;i++) {
        let n1 = i;
        for (let j=1;j<=n;j++) {
          let n2 = j;
          let sumToCheck = sum - (n1+n2);
          let multiplyResult = n1 * n2;
          if (multiplyResult == sumToCheck) {
              console.log(`${n1}-${n2} - ${multiplyResult} - ${sumToCheck}`)
              output.push([n1,n2])
          }
        }
    }
    return output;
  }
  

  console.log(removeNb(26))

//Problem 7
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3

// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.

function longestSlideDown (pyramid) {
    let sum = 0;
    let possibleIndex = [];
    for (let i=0;i<pyramid.length;i++) {
        let selectedIndex =0;
        let item = pyramid[i];
        if(item && item.length == 1) {
            sum = item[0];
            selectedIndex = 0;
            possibleIndex.push(0)
            possibleIndex.push(1)
        } else {
            let highest = 0;
            let index = 0;
            for(let j=0;j<item.length;j++) {
                if (!possibleIndex.includes(j)) continue;
                if (highest < item[j]) {
                    highest = item[j];
                    index = j;
                }
            }
            sum += highest;
            possibleIndex = [];
            possibleIndex.push(index-1);
            possibleIndex.push(index);
            possibleIndex.push(index+1)
        }
    }
return sum;
}
console.log(longestSlideDown(
    [[75],
     [95, 64],
     [17, 47, 82],
     [18, 35, 87, 10],
     [20,  4, 82, 47, 65],
     [19,  1, 23, 75,  3, 34],
     [88,  2, 77, 73,  7, 63, 67],
     [99, 65,  4, 28,  6, 16, 70, 92],
     [41, 41, 26, 56, 83, 40, 80, 70, 33],
     [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
     [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
     [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
     [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
     [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]))