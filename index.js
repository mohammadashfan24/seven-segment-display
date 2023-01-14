const numbers = [
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1]
]
const array = [1, 1, 1, 1, 1, 1, 0];

    const parent = document.getElementById('container');
    const children = parent.children;

   
    const displaySegment = (item) => {
        item.map((elem, index) => {
            children[index].style.opacity = 0.2
            children[index].style.background = "black"
            if(elem && children[index].style) {
                children[index].style.background = "red"
                children[index].style.opacity = 1
            }  
       })     
    }
   
let i = 0;
const loop = () => {
    if(children.style) {
        children.style.opacity = 0.2;
        children.style.background = "black";
    }
    displaySegment(numbers[i]);
    i++;
    if(i < numbers.length) {
        setTimeout(loop, 2000);
    }
}
loop();