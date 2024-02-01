// api key e9b5bf6ee2a28065755bad746c554544e7200ff2
let count = 0
const url = "https://emoji-api.com/emojis?access_key=e9b5bf6ee2a28065755bad746c554544e7200ff2"
let emojis = []
const emo = document.getElementById("emoji")

function random_emo(data){
    let l = data.length
    let rand_el = Math.floor(Math.random()*l + 1)
    let char = data[rand_el].character
    document.getElementById("emoji").innerHTML = char
}

function emoji(){
    fetch(url)
    .then(res => res.json())
    .then(data => random_emo(data))
}
