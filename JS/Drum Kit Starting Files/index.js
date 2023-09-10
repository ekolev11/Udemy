const buttons = document.querySelectorAll(".drum");
var audio = new Audio('sounds/tom-1.mp3')
for(var i = 0;i < buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        audio.play();
    });

}