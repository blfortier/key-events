/* global $*/

window.addEventListener('keydown', event => {
   switch(event.keyCode) {
        case 65:
            setBackgroundColor('cyan');
            break;
        case 40:
            addBorder();
            break;
        case 38:
            changeCircleColor();
            break;
        case 37:
            addImage();
            break;
        case 39:
            removeImage();
            break;
        case 80:
            animate();
            break;
        case 70:
            changeFont();
            break;
        
            
   } 
});

// Change the background color when a certain key is pressed
function setBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

// Add a border to an element when a certain key is pressed
function addBorder() {
    document.querySelector('h1').style.border = "thick dotted pink";
}

// Animate an element when a certain key is pressed 
function animate() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

// Change the font of an element
function changeFont() {
    document.getElementById("changeFont").style.fontFamily = "'Indie Flower', cursive;";
}

// Change the color of the circle
function changeCircleColor() {
    document.getElementById("animate").style.backgroundColor = "pink";
}

// Add an image
function addImage() {
    document.getElementById("bgImage").style.backgroundImage = "url(https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
}

function removeImage() {
    document.getElementById("bgImage").style.backgroundImage = "none;"
}





