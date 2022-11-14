//1
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let processingArray = iterable;
    if (!Array.isArray(iterable)) {
      processingArray = iterable.split('');
    }
    let previousItem;
    let uniqueArray = processingArray.filter(item => {
          if (item !== previousItem) {
              previousItem = item;
              return item;
          } else previousItem = item;
      })
    return uniqueArray;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))     //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))   //[1,2,3]


function moveZeros(arr) {
    let count = 0;
    const copyArr = [...arr];
    let newArray = copyArr.filter((n, index)=> {
      if (n !== 0) return n;
      else count++
    })
    for( let i =0; i< count; i++) {
        newArray.push(0);
    }
    return newArray;
  }

  function move0 ( arr) {
    return [
        ...(arr.filter(x => x !== 0)),
        ...(arr.filter(x=> x === 0))
    ]
  }


console.log(move0([ 9, 0, 9, 1, 2, 1, 1, 3, 0, 1,0, 9, 0, 0, 9]));

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countNamess = names.reduce((allNames, currentName) => {
    const currentCount = allNames[currentName] ?? 0;
    return {
        ...allNames,
        [currentName] : currentCount + 1
    }
},{})

const countNames = names.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  }, {});

console.log(countNames)
console.log(countNamess)

// let elements = document.getElementsByClassName("tooltip");

// for(let i=0;i<elements.length;i++) {
//     elements[i].addEventListener('click', callBackFunction, false);
// }

// function callBackFunction() {

// }

// function openTooltip(text, context) {
//     let offset = 20;

//     let tooltipDiv = document.getElementById('toolTipBase');
//     let elem = document.getElementById(context.id);
//     tooltipDiv.style.top = elem.offsetTop + offset + 'px';
//     tooltipDiv.style.left = elem.offsetLeft + offset + 'px';
//     tooltipDiv.style.display = 'block';
//     tooltipDiv.innerHTML = text;
// }

// function closeTooltip (context) {
//     let tooltipDiv = document.getElementById('toolTipBase');
//     tooltipDiv.style.display = 'none';
// }



























//tooltip using vanila JS

function openToolTip(text, context) {
    let offset = 20;
    let element = document.getElementById(context.id);
    let tooltipDiv = document.getElementById('tooltipBase');
    tooltipDiv.style.top = element.offsetTop + offset + 'px';
    tooltipDiv.style.left = element.offsetLeft + offset + 'px';
    tooltipDiv.style.display = 'block';
    tooltipDiv.innerHTML = text;

}

const closeToolTip = () => {
    let tooltipDiv = document.getElementById('tooltipBase');
    tooltipDiv.style.display = 'none';
}

const copy = () => {
    let element = document.getElementById('myinput');
    let value = element.value;
    try {
        // navigator.clipboard.writeText(value).then(
        //     function(){
        //         alert("yeah!"); // success 
        //     })
        //   .catch(
        //      function() {
        //         alert("err"); // error
        //   });
        navigator.clipboard.writeText(value).then(function() {
            console.log('success');
            let elem = document.getElementById('stickyMsg');
            elem.innerHTML = "Text copied to clipboard !"
            elem.classList = 'overrideClass';
            setTimeout(function() {
                elem.classList = '';
            }, 3000)
        }).catch(function() { console.log('error')});
    } catch(e) {

    } finally {
        //document.body.removeChild(textArea)
    }
}

let x = 0;
let y = 0;

const elem = document.getElementById('dragMe');


const mouseMoveHandler = (e) => {

    const dx = e.clientX - x;
    const dy = e.clientY - y;

    elem.style.top = `${elem.offsetTop + dy}px`
    elem.style.left = `${elem.offsetLeft + dx}px`

    x = e.clientX;
    y = e.clientY;
}

const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
}

const mouseDownHandler = (e) => {
    x = e.clientX;
    y = e.clientY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}
elem.addEventListener('mousedown', mouseDownHandler);