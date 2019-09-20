
var  button = document.querySelector("#pButton");
var myimg = document.querySelector("#myimg");
var displaytime = document.querySelector("#time");
var playAgain = document.querySelector("#playagain");


button.addEventListener('click',play);

// duration of the song in seconds
var fakeDuration = 231;


var music = new Audio();

music.src = "You & Me.mp3";

// play the song
function play(){
    if(music.paused)
        {
            music.play();
            button.className ="";
            button.className = "fas fa-pause";
            myimg.classList.add('spin-animation');
             
             
        }
    else{
        music.pause();
        button.className ="";
        button.className = "fas fa-play";
        myimg.classList.remove('spin-animation');
    }
    
    // display music time
    music.ontimeupdate = function(){
     let currentTime = music.currentTime;
     //  console.log(currentTime); to check
     let elapsed = fakeDuration - currentTime;
     let seconds = Math.floor(elapsed % 60);
     let minutes = Math.floor(elapsed / 60);

     displaytime.textContent = `${minutes}:${seconds}`;


};
    
   
}

playAgain.addEventListener('click',function(){
    music.currentTime =0;
    play();
})
