document.getElementById("btn_1").onclick = function(){
    document.getElementById("answer").value += 1
}

document.getElementById("btn_2").onclick = function(){
    document.getElementById("answer").value += 2
}

document.getElementById("btn_3").onclick = function(){
    document.getElementById("answer").value += 3
}

document.getElementById("btn_4").onclick = function(){
    document.getElementById("answer").value += 4
}

document.getElementById("btn_5").onclick = function(){
    document.getElementById("answer").value += 5
}

document.getElementById("btn_6").onclick = function(){
    document.getElementById("answer").value += 6
}

document.getElementById("btn_7").onclick = function(){
    document.getElementById("answer").value += 7
}

document.getElementById("btn_8").onclick = function(){
    document.getElementById("answer").value += 8
}

document.getElementById("btn_9").onclick = function(){
    document.getElementById("answer").value += 9
}

document.getElementById("btn_0").onclick = function(){
    document.getElementById("answer").value += 0
}

document.getElementById("btn_+").onclick = function(){
    document.getElementById("answer").value += "+"
}

document.getElementById("btn_-").onclick = function(){
    document.getElementById("answer").value += "-"
}

document.getElementById("btn_*").onclick = function(){
    document.getElementById("answer").value += "*"
}

document.getElementById("btn_/").onclick = function(){
    document.getElementById("answer").value += "/"
}

document.getElementById("btn_=").onclick = function(){
    document.getElementById("answer").value =
    eval(document.getElementById("answer").value)
}

document.getElementById("btn_x").onclick = function(){
    document.getElementById("answer").value =
    document.getElementById("answer").value.slice(0,-1)
}