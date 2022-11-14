function createTooltip(context, text) {
    let offset = 20;
    let tooltipEle = document.getElementById('tooltip');
    let element =  document.getElementById(context.id);
    tooltipEle.style.top = element.offsetTop + offset + 'px';
    tooltipEle.style.left = element.offsetLeft + offset + 'px';
    tooltipEle.style.display = 'block';
    tooltipEle.innerHTML = text;
}

const removeTooltip = () => {
    let tooltipEle = document.getElementById('tooltip');
    tooltipEle.style.display = 'none';
}

let elem = document.getElementById('dragMe');
let x = 0;
let y = 0;
let mouseDownHandler = e => {
    x = e.clientX;
    y = e.clientY;
    elem.addEventListener('mousemove', handleMouseMove);
    elem.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    elem.style.top = `${elem.offsetTop + dy}px`
    elem.style.left = `${elem.offsetLeft + dx}px`

    x = e.clientX;
    y = e.clientY;
 }

function handleMouseUp() {
    elem.removeEventListener('mousemove', handleMouseMove)
    elem.removeEventListener('mouseup', handleMouseUp)
}
elem.addEventListener('mousedown', mouseDownHandler)