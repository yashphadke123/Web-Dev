var clap = new Audio("js/sounds/clap.wav");
var boom = new Audio("js/sounds/boom.wav");
var hihat = new Audio("js/sounds/hihat.wav");
var kick = new Audio("js/sounds/kick.wav");
var openhat = new Audio("js/sounds/openhat.wav");
var ride = new Audio("js/sounds/ride.wav");
var snare = new Audio("js/sounds/snare.wav");
var tink = new Audio("js/sounds/tink.wav");
var tom = new Audio("js/sounds/tom.wav");

document.addEventListener('keydown',function(e){
    if(e.keyCode ==65){
        clap.play()
    }
    else if(e.keyCode == 83){
        hihat.play()
    }
    else if(e.keyCode == 68){
        kick.play()
    }   
    else if(e.keyCode == 70){
        openhat.play()
    }
    else if(e.keyCode == 71){
        boom.play()
    }
    else if(e.keyCode == 72){
        ride.play()
    }
    else if(e.keyCode == 74){
        snare.play()
    }
    else if(e.keyCode == 75){
        tom.play()
    }
    else if(e.keyCode == 76){
        tink.play()
    }
})

function clap_fn(){
    clap.play()
}

function hihat_fn(){
    hihat.play()
}

function kick_fn(){
    kick.play()
}

function openhat_fn(){
    openhat.play()
}

function boom_fn(){
    boom.play()
}

function ride_fn(){
    ride.play()
}

function snare_fn(){
    snare.play()
}

function tom_fn(){
    tom.play()
}

function tink_fn(){
    tink.play()
}