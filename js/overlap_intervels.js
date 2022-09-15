// Q: Given a collection of intervals, merge all overlapping intervals.

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

let intervals =  [[2,6],[8,10],[15,18], [1,3], [5,8], [4,9]];

intervals.sort((x,y) => x[0] - y[0]);
let res = [];

for (let i=0;i<=intervals.length-1;i++) {
  let a = res[res.length - 1];
  let b = intervals[i];
  if (checkOverlap(a, b)) {
   a[0] = Math.min(a[0], b[0]);
   a[1] = Math.max(a[1], b[1])
  } else {
    res.push(intervals[i]);
  }
}
function checkOverlap(a, b) {
 if (!a || !b) return false;
 if (b[0] <= a[1] && a[1] <= b[1]) return true;
 if (a[0] <= b[1] && b[1] <= a[1]) return true;
 return false;
}

console.log(res);
