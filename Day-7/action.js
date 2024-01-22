let count = 1
let form = "form_"
let array = ["name","email"]

function add(){
    form = form + count
    let form_text = document.createElement("input")
    form_text.setAttribute('id',form)
    form_text.setAttribute('placeholder',"Another Field")
    document.getElementById("main").appendChild(form_text)
    array.push(form)
    form = "form_"
    count = count + 1
}

function rm(){
        rem = document.getElementById(array[count])
        rem.remove()
        count = count -1
}

