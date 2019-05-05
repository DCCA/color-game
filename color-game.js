var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var rgbDisplay = document.querySelector('#rgbDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click',function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected')
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length ; i++){
        squares[i].addEventListener('click',function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!';
                changeColor(clickedColor);
                resetButton.textContent = 'Play Again?';
                h1.style.backgroundColor = clickedColor;
            } else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent =  'Try Again'; 
            }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new color
    pickedColor = pickColor();
    //change display color
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    //change colors in squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        } 
    }
    h1.style.backgroundColor = 'steelblue';    
}

resetButton.addEventListener('click',function(){
    reset();
})



function changeColor(color){
    //loop through all squares
    for(var i = 0 ; i < squares.length ; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random colors to array
    for(var i = 0 ; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    //return color
    return "rgb(" + r + ', ' + g + ', ' + b +')'
}





