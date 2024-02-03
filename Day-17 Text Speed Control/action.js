let str = "0 Days Of Javascript"
let count = 0
let l = str.length
let i = 0


function temp(){

    if(i !=l){
        document.getElementById("txt").innerHTML += str[i]
        i = i + 1
    }
    else{
        i = 0 
        document.getElementById("txt").innerHTML = "3"
    }
}

function vel(){
    let inp = document.getElementById("input").value
    console.log(document.getElementById("input").value)
    let time = 200/inp
    setInterval(temp,time)

}

