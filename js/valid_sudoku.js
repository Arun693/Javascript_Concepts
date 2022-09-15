//Q : Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

//Example :
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true

let input = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];

console.log(isSudokuValid(input));
console.log(isValidSudoku(input))
//Solution 1
function isSudokuValid(input) {
    let isValid = true;
    for (let i=0;i<9;i++) {
        let loopItem = input[i];
        for (let j=0;j<9;j++) {
            if (input[i][j] == '.') continue;
            let loopNum = input[i][j];
            let verticalValid = isVerticalValid(loopNum, loopItem, i);
            let horizontalValid = isHorizontalValid(loopNum, input,j);
            let subBoxValid = isSubBoxValid(loopNum, input,i,j);
            if (!verticalValid || !horizontalValid || !subBoxValid) {
                isValid = false;
                break;
            }
        }
        if (!isValid) break;
    }
    return isValid;
}

function isVerticalValid(loopNum,loopItem) {
    let counter = 0;
    for(let i=0;i<9;i++) {
        if(loopNum == loopItem[i]){
            counter++;
        }
    }
   return counter > 1 ? false : true;
}

function isHorizontalValid(loopNum, input, y) {
    let counter = 0;
    for (let i=0;i<9;i++) {
        if (input[i][y] == loopNum) counter++;
    }
   return counter > 1 ? false : true;
}

function isSubBoxValid(loopNum, input, x, y) {
    let outLoopIndex = Math.floor(x/3);
    let innerLoopIndex = Math.floor(y/3);
    let iMax = 0, iMin = 0, jMax = 0, jMin = 0;
    let counter = 0;
    if (outLoopIndex < 1) {
        iMax = 2;
        iMin = 0;
    } else if (outLoopIndex > 1 && outLoopIndex < 2) {
        iMax = 5;
        iMin = 3;
    } else {
        iMax = 8;
        iMin = 6;
    }
    
    if (innerLoopIndex < 1) {
        jMax = 2;
        jMin = 0;
    } else if (innerLoopIndex > 1 && innerLoopIndex < 2) {
        jMax = 5;
        jMin = 3;
    } else {
        jMax = 8;
        jMin = 6;
    }
    for (let i =iMin; i<= iMax; i++) {
        for (let j = jMin; j <= jMax; j++) {
           if (input[i][j] == loopNum) {
             counter++
           }
        }
    }
    return counter > 1 ? false : true;
}


//Soution 2 

function isValidSudoku(board) {
    var map = {};
    var tmp = 0;
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        tmp = board[i][j];
        if (tmp === '.') continue;
        if (map['i' + i + tmp] || map['j' + j + tmp] || map['b' + Math.floor(i / 3) + Math.floor(j / 3) + tmp]) return false;
        map['i' + i + tmp] = 1;
        map['j' + j + tmp] = 1;
        map['b' + Math.floor(i / 3) + Math.floor(j / 3) + tmp] = 1;
      }
    }
    return true;
  };