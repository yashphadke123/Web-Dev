let count = 0

window.onload = function (){
    setInterval(lights,1000)
}

function lights(){
    count = count + 1
    if (count === 1){
        document.getElementById("red").style.backgroundColor = "red"
        document.getElementById("yel").style.backgroundColor = "white"
        document.getElementById("gre").style.backgroundColor = "white"
    }
    else if (count === 2){
        document.getElementById("red").style.backgroundColor = "white"
        document.getElementById("yel").style.backgroundColor = "yellow"
        document.getElementById("gre").style.backgroundColor = "white"
    }
    else if (count === 3){
        document.getElementById("red").style.backgroundColor = "white"
        document.getElementById("yel").style.backgroundColor = "white"
        document.getElementById("gre").style.backgroundColor = "green"
        count = 0
    }
}