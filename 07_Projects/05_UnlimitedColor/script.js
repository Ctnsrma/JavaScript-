// generate random color
const hex = "0123456789ABCDEF"

const randColor = function(){
    let color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randColor());

let IntervalId;
const startChangingColor = function(){
    if(!IntervalId){
        IntervalId = setInterval(changeBg,1000)
    }
    function changeBg(){
        document.body.style.backgroundColor = randColor();
        document.querySelector('#colorName').innerHTML = `Color : ${randColor()}`
    }
}

const stopChangingColor = function (){
    clearInterval(IntervalId)
    IntervalId = null;
}

document.getElementById("start").addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor)
