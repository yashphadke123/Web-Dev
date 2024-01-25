function word_counter(){
    let words = 0
    let para = 0
    let snts= 0
    let str = document.getElementById("txt").value
    let length = str.length
    document.getElementById("chars").innerText = "Chars:" + length
    for(let i = 0;i <= length;i++){
        if(str[i] == "."){
            snts = snts + 1
            document.getElementById("snt").innerText = "Sentences:" + snts
        }
        else if(str[i] == '\n'){
            para = para + 1
            document.getElementById("para").innerText = "Paragraphs:" + para
        }
        else if(str[i] == ' '){
            words = words + 1
            document.getElementById("words").innerText = "Words:" + words   
        }
        else if(length === 0){
            document.getElementById("snt").innerText = "Sentences:0"
            document.getElementById("words").innerText = "Words:0"
            document.getElementById("para").innerText = "Paragraph:0"
        }
        else if(length === 1){
            document.getElementById("snt").innerText = "Sentences:1"
            document.getElementById("words").innerText = "Words:1"
            document.getElementById("para").innerText = "Paragraph:1"
        }
    }
}