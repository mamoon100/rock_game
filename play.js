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
            return "It's a tie!"
        }
        else if (computer === "paper"){
            c+=1
            return "The computer wins :("
        }
        else {
            h+=1
            return "The human win! whooooooooo!"
        }
    }
    else if (human === "paper"){
        if (computer === "paper"){
            return "It's a tie!"
        }
        else if (computer === "scissors"){
            c+=1
            return "The computer wins :("
        }
        else {
            h+=1
            return "The human win! whooooooooo!"
        }
    }
    else if (human === "scissors"){
        if (computer === "scissors"){
            return "It's a tie!"
        }
        else if (computer === "rock"){
            c+=1
            return "The computer wins :("
        }
        else {
            h+=1
            return "The human win! whooooooooo!"
        }
    }
    else {
        return "You have choosen a wopen that you don't have!!"
    }
}

function Play () {
    var h = 0
    var c= 0
    for (var i=1; i>0 ; i++){
        var x = prompt ("Please select your wopen Rock, Paper or Scissors")
        var y = computerPlay()
        x = x.toLowerCase()
        select(x, y)
        console.log("The human score is =", h ,"The computer score is = ", c)
        if (h >= 5){
            console.log("the winner is the human")
            break;
        }
        else if (c>=5) {
            console.log("The winner is the computer")
        }
    }
}

console.log(Play())