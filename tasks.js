/* global $*/

window.addEventListener('keydown', event => {
   switch(event.keyCode) {
        case 65:
            setBackgroundColor('cyan');
            break;
        case 66:
            addBorder();
            break;
        case 38:
            changeCircleColor();
            break;
        case 37:
            addImage();
            break;
        case 85:
            fadeOut();
            break;
        case 80:
            animate();
            break;
        case 70:
            changeFont();
            break;
        case 83:
            changeFontSize();
            break;
        case 72:
            changeFontColor();
            break;
        case 86:
            createVideo();
            break;
   } 
});

// Change the background color when a certain key is pressed
function setBackgroundColor(color) {
    document.getElementById('elem1').style.backgroundColor = color;
}

// Add a border to an element when a certain key is pressed
function addBorder() {
    document.getElementById('addBorder').style.border = "thick dotted green";
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
    document.getElementById("changeFont").style.fontFamily = 'Dancing Script', cursive;
}

// Change the color of the circle
function changeCircleColor() {
    document.getElementById("animate").style.backgroundColor = "purple";
}

// Add an image
function addImage() {
    document.getElementById("image").src = "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

}

// Fade out the words
function fadeOut() {
    $("#fade").fadeOut();    

}

// Change the font size
function changeFontSize() {
    document.getElementById("fontSize").style.fontSize = "50px";
}

// Change the font color
function changeFontColor() {
    document.getElementById("fontColor").style.color = "#ff7b25";
}

function createVideo() {
    var parent = document.getElementById("parent");
    var child = document.getElementById("child");
    parent.removeChild(child);
    document.getElementById("video").src = "https://www.youtube.com/embed/-5Rka0TyrYw";
    
}










