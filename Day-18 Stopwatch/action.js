let s = 0
let m = 0
let h = 0
let timer 
function start(){
    timer = setInterval(clock,1000)
}

function lap(){
    document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "\n" + h + ':' + m + ":" + s
}

function clock(){
    if(s < 10 && m < 10 && h < 10){
        document.getElementById("time").innerHTML = "0" + h + ":0" + m + ":0" + s
    }
    else if (s>=10 && m<10 && h <10){
        document.getElementById("time").innerHTML = "0" + h + ":0" + m +":"+ s
    }
    else if (s<10 && m>=10 && h <10){
        document.getElementById("time").innerHTML = "0" + h + ":" + m + ":0" + s
    }
    else if (s>=10 && m>=10 && h <10){
        document.getElementById("time").innerHTML = "0" + h + ":" + m + ":" + s
    }
    else if(s < 10 && m < 10 && h >= 10){
        document.getElementById("time").innerHTML = h + ":0" + m + ":0" + s
    }
    else if (s>=10 && m<10 && h >= 10){
        document.getElementById("time").innerHTML = h + ":0" + m +":"+ s
    }
    else if (s<10 && m>=10 && h >= 10){
        document.getElementById("time").innerHTML = h + ":" + m + ":0" + s
    }
    else if (s>=10 && m>=10 && h >= 10){
        document.getElementById("time").innerHTML = h + ":" + m + ":" + s
    }
    if(s === 60){
        s = 0
        m = m + 1
    }
    else if( m === 60){
        m = 0 
        h = h + 1
    }
    // else{
    //     document.getElementById("time").innerHTML = h + ":" + m + ":" + s
    // }
    s = s + 1
}

function stop(){
    clearInterval(timer)
    if (s < 10 || s == 0){
        sec = '0' + sec ;
    }
    if (m < 10 || m == 0){
        m = '0' + m ;
    }
    if (h < 10 || h == 0){
        h = '0' + h ;
    }   
    document.getElementById("time").innerHTML = h + ":" + m +":" + s
}

function reset(){
    clearInterval(timer)
    document.getElementById("time").innerHTML = "00:00:00"
    document.getElementById("log").innerHTML = ""
    s = 0
    m = 0
    h = 0
}