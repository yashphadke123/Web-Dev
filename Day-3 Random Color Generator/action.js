window.onload = function(){
    color()
}
// width = 475px add 15px to every element
// height == 200px add 10px to every element
let code_lst = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let div_lst = ['one','two','three','four','five','six','seven','eight','nine']
// making a function to get a HEX random code
function rand_code(){
    let code = ""
    for(let i =0 ; i<6 ; i++){
        code = code + code_lst[Math.floor(Math.random()*code_lst.length)]
    }
    return "#" + code
}

function apply_color(id){
    const div = document.getElementById(id)
    let code1 = rand_code()
    let bakcol = "background-color:" + code1
    div.setAttribute("style",bakcol)
    div.innerText = code1
}

function color(){
    for(let i = 0; i < div_lst.length;i++){
        apply_color(div_lst[i])
    } 
}