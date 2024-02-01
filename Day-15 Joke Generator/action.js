// api key 0hhDopMc9mygfv3o063kzA==oL5DXoQWlwv20Fu9
let options = {
    method : 'GET',
    headers: {'x-api-key':"0hhDopMc9mygfv3o063kzA==oL5DXoQWlwv20Fu9"}
}
let url = "https://api.api-ninjas.com/v1/jokes?limit=1"

function temp(data){
    document.getElementById("text").innerHTML = data[0].joke
}

function joke_gen(){
    fetch(url,options)
        .then(res => res.json())
        .then(data => temp(data))
}