function face(){
    el = Math.floor(Math.random()*6 + 1)
    document.getElementById("dice_im").src = "assets/"+ el +".png"
}

function Play(){
    setTimeout(face,1000)
    document.getElementById("dice_im").src = "assets/dice-roll.gif"
}