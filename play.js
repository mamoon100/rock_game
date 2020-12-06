var hum = document.getElementById("hum");
var com = document.getElementById("com");
var wo = document.getElementById("wo");
var sc = document.getElementById("sc");
humm = 0;
comm = 0;
hum.innerHTML = humm;
com.innerHTML = comm;
function computerPlay () {
    var c =Math.floor(Math.random()*3)
    if (c === 1){
        return "rock"
    }
    else if (c === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function select (human, computer) {
    if (human === "rock"){
        if (computer === "rock"){
            wo.innerHTML = 'Rock'
            sc.innerHTML = "Tie!"
        }
        else if (computer === "paper"){
            wo.innerHTML = 'Paper'
            comm += 1
            com.innerHTML = comm
            sc.innerHTML = "Lost :("
        }
        else {
            wo.innerHTML = 'Scissors'
            humm += 1
            hum.innerHTML = humm
            sc.innerHTML = "Win! whooooooooo!"
        }
    }
    else if (human === "paper"){
        if (computer === "paper"){
            wo.innerHTML = 'Paper'
            sc.innerHTML = "Tie!"
        }
        else if (computer === "scissors"){
            wo.innerHTML = 'Scissors'
            comm += 1
            com.innerHTML = comm
            sc.innerHTML = "Lost :("
        }
        else {
            wo.innerHTML = 'Rock'
            humm += 1
            hum.innerHTML = humm
            sc.innerHTML = "Win! whooooooooo!"
        }
    }
    else if (human === "scissors"){
        if (computer === "scissors"){
            wo.innerHTML = 'Scissors'
            sc.innerHTML = "Tie!"
        }
        else if (computer === "rock"){
            wo.innerHTML = 'Rock'
            comm += 1
            com.innerHTML = comm
            sc.innerHTML = "Lost :("
        }
        else {
            wo.innerHTML = 'Paper'
            humm += 1
            hum.innerHTML = humm
            sc.innerHTML = "Win! whooooooooo!"
        }
    }
}

function Play (x) {
    var h = 0
    var c= 0
    var y = computerPlay()
    x = x.toLowerCase()
    select(x, y)
    /*if (humm >= 5 ){
        End("hum")
    }
    else if (comm >= 5) {
        End("com")
    }*/
}
/*
This function was supposed to end the game 
function End (v) {
    body.innerHTML = "you have woooooooooooon"
}
*/