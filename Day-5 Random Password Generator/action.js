let password =""
let words = ["enemy","military","idea","plan","incompetant","party","demon","guilt","deadly","uniform","enormous","founder","bait",
            "martyrs","raid","jaw","armour","angels","enemy","war","giant","hurry"
            ]
let special_chars = [0,1,2,3,4,5,6,7,8,9,"!","@","#","$","%","&","*"]

function rand_el(arr){
    index = Math.floor(Math.random()*arr.length)
    return arr[index]
}

function generate(){
  password = password + rand_el(words) + rand_el(special_chars) + rand_el(words) + rand_el(special_chars) + rand_el(words)
  document.getElementById("text").innerHTML = password
  password = ""
}

function copy(){
    txt = document.getElementById("text")
    txt.select()
    txt.setSelectionRange(0,99999)
    navigator.clipboard.writeText(txt.innerText).then(() => alert('Text copied'));
}