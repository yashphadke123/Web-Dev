let col1 = [-1,-1,-1]
let col2 = [-1,-1,-1]
let col3 = [-1,-1,-1]
let count = 0
let one_down = true;
let two_down = true;
let three_down = true;
let four_down = true;
let five_down = true;
let six_down = true;
let seven_down = true;
let eight_down = true;
let nine_down = true;
// x val = 1 and o val = 0 
function f1(){
    if(one_down){
        if(count % 2 === 0 ){
            text = "X"
            col1[0] = 1
        }
        else{
            text = "O"
            col1[0] = 0
        }
            document.getElementById("div_1").innerText = text
            count = count + 1
            one_down = false;
    }
    else{
        return;
    }
}

function f2(){
    if(two_down){
        if(count % 2 === 0 ){
            text = "X"
            col1[1] = 1
        }
        else{
            text = "O"
            col1[1] = 0
        }
            document.getElementById("div_2").innerText = text
            count = count + 1
            two_down = false;
    }
    else{
        return;
    }
}

function f3(){
    if(three_down){
        if(count % 2 === 0 ){
            text = "X"
            col1[2] = 1
        }
        else{
            text = "O"
            col1[2] = 0
        }
            document.getElementById("div_3").innerText = text
            count = count + 1
            three_down = false;
    }
    else{
        return;
    }
}

function f4(){
    if(four_down){
        if(count % 2 === 0 ){
            text = "X"
            col2[0] = 1
        }
        else{
            text = "O"
            col2[0] = 0
        }
            document.getElementById("div_4").innerText = text
            count = count + 1
            four_down = false;
    }
    else{
        return;
    }
}

function f5(){
    if(five_down){
        if(count % 2 === 0 ){
            text = "X"
            col2[1] = 1
        }
        else{
            text = "O"
            col2[1] = 0
        }
            document.getElementById("div_5").innerText = text
            count = count + 1
            five_down = false;
    }
    else{
        return;
    }
}

function f6(){
    if(six_down){
        if(count % 2 === 0 ){
            text = "X"
            col2[2] = 1
        }
        else{
            text = "O"
            col2[2] = 0
        }
            document.getElementById("div_6").innerText = text
            count = count + 1
            six_down = false;
    }
    else{
        return;
    }
}

function f7(){
    if(seven_down){
        if(count % 2 === 0 ){
            text = "X"
            col3[0] = 1
        }
        else{
            text = "O"
            col3[0] = 0
        }
            document.getElementById("div_7").innerText = text
            count = count + 1
            seven_down = false;
    }
    else{
        return;
    }
}

function f8(){
    if(eight_down){
        if(count % 2 === 0 ){
            text = "X"
            col3[1] = 1
        }
        else{
            text = "O"
            col3[1] = 0
        }
            document.getElementById("div_8").innerText = text
            count = count + 1
            eight_down = false;
    }
    else{
        return;
    }
}

function f9(){
    if(nine_down){
        if(count % 2 === 0 ){
            text = "X"
            col3[2] = 1
        }
        else{
            text = "O"
            col3[2] = 0
        }
            document.getElementById("div_9").innerText = text
            count = count + 1
            nine_down = false;
    }
    else{
        return;
    }
}
function result(){
    if(col1[0] + col2[0] + col3[0] === 3){
        document.getElementById("txt").innerText = "X wins"
    }
    else if(col1[0] + col2[0] + col3[0] === 0){
        document.getElementById("txt").innerText = "O wins"
    }
    else if(col1[1] + col2[1] + col3[1] === 3){
        document.getElementById("txt").innerText = "X wins"
    }
    else if(col1[1] + col2[1] + col3[1] === 0){
        document.getElementById("txt").innerText = "O wins"
    }
    else if(col1[2] + col2[2] + col3[2] === 3){
        document.getElementById("txt").innerText = "X wins"
    }
    else if(col1[2] + col2[2] + col3[2] === 0){
        document.getElementById("txt").innerText = "O wins"
    }
}
