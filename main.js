scoreboard = {
    'human' : 0,
    'computer' : 0
}
outcomes = ["Computer ","Human ","No-one "]
const winnerRound = document.createElement("div")
winnerRound.classList.add("winner-round")
winnerRound.style.fontSize = "40px"
const body = document.querySelector("body")
body.appendChild(winnerRound)
function rock(){
    winner()
    const humanEmoji = document.querySelector(".human-choice-event-emoji")
    const machineEmoji = document.querySelector(".machine-choice-event-emoji")
    const winnerRoundFunction = document.querySelector(".winner-round")
    humanEmoji.textContent = "✊"
    x = Math.random()
    if (x < 0.33){
        machineEmoji.textContent = "✊"
        winnerRoundFunction.textContent = outcomes[2] + "won this round"

    }
    else if (x < 0.66){
        machineEmoji.textContent = "✋"
        scoreboard.computer +=1
        winnerRoundFunction.textContent = outcomes[0] + "won this round"
    } 
    else {
        machineEmoji.textContent = "✌️"
        scoreboard.human +=1
        winnerRoundFunction.textContent = outcomes[1] + "won this round"
    }
    console.log(scoreboard)
}

function paper(){
    winner()
    const humanEmoji = document.querySelector(".human-choice-event-emoji")
    const machineEmoji = document.querySelector(".machine-choice-event-emoji")
    const winnerRoundFunction = document.querySelector(".winner-round")
    humanEmoji.textContent = "✋"
    x = Math.random()
    if (x < 0.33){
        machineEmoji.textContent = "✊"
        scoreboard.human +=1
        winnerRoundFunction.textContent = outcomes[1] + "won this round"
    }
    else if (x < 0.66){
        machineEmoji.textContent = "✋"
        winnerRoundFunction.textContent = outcomes[2] + "won this round"
    } 
    else {
        machineEmoji.textContent = "✌️"
        scoreboard.computer +=1
        winnerRoundFunction.textContent = outcomes[0] + "won this round"
    }
    console.log(scoreboard)
}

function scissors(){
    winner()
    const humanEmoji = document.querySelector(".human-choice-event-emoji")
    const machineEmoji = document.querySelector(".machine-choice-event-emoji")
    const winnerRoundFunction = document.querySelector(".winner-round")
    humanEmoji.textContent = "✌️"
    x = Math.random()
    if (x < 0.33){
        machineEmoji.textContent = "✊"
        scoreboard.computer +=1
        winnerRoundFunction.textContent = outcomes[0] + "won this round"
    }
    else if (x < 0.66){
        machineEmoji.textContent = "✋"
        scoreboard.human +=1
        winnerRoundFunction.textContent = outcomes[1] + "won this round"
    } 
    else {
        machineEmoji.textContent = "✌️"
        winnerRoundFunction.textContent = outcomes[2] + "won this round"
    }
    document.querySelector("body").appendChild(winnerRound)
    console.log(scoreboard)
}

function winner() {
    if (scoreboard.human >= 3 || scoreboard.computer >= 3){
        const winnerText = document.createElement("div")
        winnerText.style.fontSize = "40px"
        if (scoreboard.human > scoreboard.computer){
            winnerText.textContent = "You won!!"
        }
        else {
            winnerText.textContent = "Computer won!!"
        }
        body.replaceChildren(winnerText)
    }
}

const rockButton = document.querySelector(".rock")
const scissorButton = document.querySelector(".scissor")
const paperButton = document.querySelector(".paper")
 
rockButton.addEventListener("click",rock)
scissorButton.addEventListener("click",scissors)
paperButton.addEventListener("click",paper)
body.addEventListener("mouseover",winner)
