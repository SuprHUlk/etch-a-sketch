function make(size,color) {
    const container=document.querySelector("#super-grid");
    let grids=document.querySelectorAll(".grid");
    grids.forEach((grid)=>grid.remove());
    container.style.gridTemplateColumns="repeat("+size+",1fr)";
    for(let i=0;i<size*size;i++) {
        let grid=document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener('pointerover',changeColor);
        container.appendChild(grid);
    }
}

function changeColor() {
    if (click) {
    if(color==="random") {
        this.style.backgroundColor=random();
    }
    else {
        this.style.backgroundColor=color;
    } }
}

function colorButton(choice) {
    color=choice;
}

function random() {
    let r=Math.floor(Math.random()*255)+1;
    let b=Math.floor(Math.random()*255)+1;
    let g=Math.floor(Math.random()*255)+1;
    return "rgb("+r+","+g+","+b+")";
}

let color="black";
let size=16;
let click=false;
make(size,color);

const btn0=document.querySelector("#btn0");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector("#btn5");
const btn6=document.querySelector("#btn6");
const btn7=document.querySelector("#btn7");
const btn8=document.querySelector("#btn8");

btn0.addEventListener('click',()=>{
    while(true) {
        size=prompt("Size of grid");
        if(size>0 && size<51) {
            break;
        }
        alert("Invalid number. Enter a number between 1 and 50");
    }
    make(size,color);
});

btn1.addEventListener('click',()=>{
    colorButton("white");
});

btn2.addEventListener('click',()=>{
    make(16,"black");
});

btn3.addEventListener('click',()=>{
    colorButton("black");
});

btn4.addEventListener('click',()=>{
    colorButton("red");
});

btn5.addEventListener('click',()=>{
    colorButton("rgb(24, 212, 24)");
});

btn6.addEventListener('click',()=>{
    colorButton("rgb(0, 123, 255)");
});

btn7.addEventListener('click',()=>{
    colorButton(random());
});

btn8.addEventListener('click',()=>{
    colorButton("random");
});

document.querySelector(".box").addEventListener('click',()=>{
    click=!click;
})



