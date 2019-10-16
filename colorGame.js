var colors = randomColors(6);

var squares = document.querySelectorAll(".square");
var msg = document.querySelector("#message");
var h1 = document.querySelector("#heading");
var pickedColor = pickColor()

document.getElementById("RGB").textContent = " "+ pickedColor;


for(var i = 0; i< squares.length;i++){
    //Adding Initial Colors
squares[i].style.backgroundColor = colors[i];

//Adding Event Listener for every click
squares[i].addEventListener("click" , function(){
    var clickedColor = this.style.backgroundColor
    if(pickedColor == clickedColor){
        h1.style.backgroundColor = clickedColor;
        msg.textContent = "You WON!"
        changeColor(clickedColor)
        
    }
        else{
            this.style.backgroundColor = '#232323';
            msg.textContent = "Try Again!"
        }
    })
}

function changeColor(color){
    //loop through all the colors
    for(var i=0; i<=squares.length;i++){
        //change colors of all the squares
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //Generating a Random Number
    var randomColor = Math.floor(Math.random() * colors.length)
    //returing the picked color
    return colors[randomColor]
}

function randomColors(num){
    //make a array
    var arr =[]
    //generate a random color and push it into the array
    for(var i=0; i<num; i++){
        arr.push(generateRandomColors())
    }
    return arr
}

function generateRandomColors(){
    //RED Multi with 256 gives numbers upto 255
    var r = Math.floor(Math.random() * 256);
    //GREEN
    var g = Math.floor(Math.random() * 256);
    //BLUE
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}