
let count = 0
let default_txt = "Count"
let saved = ""

function add(){
    count = count+1
    document.getElementById("measure").innerText = count
}

function sub(){
    count = count - 1
    document.getElementById("measure").innerText = count
}

function reset(){
    count = 0
    document.getElementById("measure").innerText = count
}

function save(){
    saved = saved + " "+ count
    document.getElementById("space").innerText = saved
}