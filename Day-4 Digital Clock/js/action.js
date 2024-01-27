function time(){
    let current_time = new Date()
    h = current_time.getHours()
    s = current_time.getSeconds()
    m = current_time.getMinutes()
    document.getElementById("hours").innerHTML = h
    document.getElementById("minutes").innerHTML = m
    document.getElementById("seconds").innerHTML = s
    if(h>12){
        document.getElementById("time").innerHTML = "PM"
    }
    else{
        document.getElementById("time").innerHTML = "AM"
    }
}

setInterval(time,1000)