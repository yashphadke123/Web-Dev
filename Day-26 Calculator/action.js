function one(){
    document.getElementById("txt").innerHTML += "1"
}
function two(){
    document.getElementById("txt").innerHTML += "2"
}
function three(){
    document.getElementById("txt").innerHTML += "3"
}
function four(){
    document.getElementById("txt").innerHTML += "4"
}
function five(){
    document.getElementById("txt").innerHTML += "5"
}
function six(){
    document.getElementById("txt").innerHTML += "6"
}
function seven(){
    document.getElementById("txt").innerHTML += "7"
}
function eight(){
    document.getElementById("txt").innerHTML += "8"
}
function nine(){
    document.getElementById("txt").innerHTML += "9"
}
function c(){
    document.getElementById("txt").innerHTML = document.getElementById("txt").innerHTML.slice(0,document.getElementById("txt").innerHTML.length-1)
}
function ce(){
    document.getElementById("txt").innerHTML = ""
}
function per(){
    let per = Number(document.getElementById("txt").innerHTML)/100
    document.getElementById("txt").innerHTML = String(per)
}
function ten(){
    document.getElementById("txt").innerHTML += "0"
}
function hun(){
    document.getElementById("txt").innerHTML += "00"
}
function plus(){
    document.getElementById("txt").innerHTML += " + "
}
function min(){
    document.getElementById("txt").innerHTML += " - "
}
function mul(){
    document.getElementById("txt").innerHTML += " * "
}
function div(){
    document.getElementById("txt").innerHTML += " / "
}
function dot(){
    document.getElementById("txt").innerHTML += "."
}
function pi(){
    document.getElementById("txt").innerHTML += "3.14"
}
function sin(){
    let sin = Math.sin(Number(document.getElementById("txt").innerHTML))
    document.getElementById("txt").innerHTML = String(sin)
}
function cos(){
    let cos = Math.cos(Number(document.getElementById("txt").innerHTML))
    document.getElementById("txt").innerHTML = String(cos)
}
function tan(){
    let tan = Math.tan(Number(document.getElementById("txt").innerHTML))
    document.getElementById("txt").innerHTML = String(tan)
}
function sqrt(){
    let sqrt = Math.sqrt(Number(document.getElementById("txt").innerHTML))
    document.getElementById("txt").innerHTML = String(sqrt)
}
function equal(){
    let sum
    let arr = document.getElementById("txt").innerHTML.split(" ")
    for(let i = 0;i<arr.length;i++){
        if(arr[i] ==="+"){
            sum = Number(arr[i-1]) + Number(arr[i+1])
            arr[i+1] = sum
        }
        if(arr[i] ==="-"){
            sum = Number(arr[i-1]) - Number(arr[i+1])
            arr[i+1] = sum
        }
        if(arr[i] ==="*"){
            sum = Number(arr[i-1]) * Number(arr[i+1])
            arr[i+1] = sum
        }
        if(arr[i] ==="/"){
            sum = Number(arr[i-1]) / Number(arr[i+1])
            arr[i+1] = sum
        }
    }
    document.getElementById("txt").innerHTML = String(sum)
}