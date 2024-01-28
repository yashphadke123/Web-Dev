let hrs 
let min
let sec
let timer

function start() {
    timer = setInterval(countdown,1000)
}

function countdown(){
    hrs = document.getElementById("hrs").value
    min = document.getElementById("min").value
    sec = document.getElementById("sec").value
    sec = sec - 1
    if(sec === 0 && sec > 0){
        sec = 59
        min = min -1
    }
    else if(min === 0 && min > 0){
        min = 59
        hrs = hrs - 1
    }
    else if (sec < 0){
        sec = 0
        min = 0
        hrs = 0
    }
    document.getElementById("hrs").value = hrs
    document.getElementById("min").value = min
    document.getElementById("sec").value = sec
}

function pause(){
    clearInterval(timer)
    document.getElementById("hrs").value = hrs
    document.getElementById("min").value = min
    document.getElementById("sec").value = sec
}