var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0;i < numberOfDrumButtons; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",handleToClick);
 function handleToClick(){
   var buttonInnerHtml = this.innerHTML;
     makeSound(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);
}

addEventListener("keypress",function(){ 
  makeSound(event.key);
  buttonAnimation(event.key);
});

/**
 * @description Takes a single key as an argument and plays a sound based on it. If the key does not match any of the cases, it logs the key to the console.
 * @param {String} key - The key to be used to determine which sound to play.
 */
function makeSound(key){
   switch (key) {
   case "w":
      var tom1 = new Audio ('sounds/tom-1.mp3');
      tom1.play();
      break;
   case "a":
      var tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();
      break;
   case "s":
      var tom3 = new Audio ('sounds/tom-3.mp3');
      tom3.play();
      break;
   case "d":
      var tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();
      break;
   case "j":
      var crash = new Audio ('sounds/crash.mp3');
      crash.play();
      break;
   case "k":
      var kick = new Audio ('sounds/kick-bass.mp3');
      kick.play();
      break;
   case "l":
      var snare = new Audio ('sounds/snare.mp3');
      snare.play();
      break;

   default: console.log(buttonInnerHtml);
      break;
}
}
}

function buttonAnimation(currentKey){  
  document.querySelector("."+ currentKey).classList.add("pressed");
   setTimeout(function(){
    document.querySelector("."+ currentKey).classList.remove("pressed");
   }, 100);
}

