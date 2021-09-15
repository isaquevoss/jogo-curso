function game() {
    
}
fruitColors = ['pink', 'purple', 'blue', 'green']

function getRandomPosition(max){
    return Math.floor(Math.random() * max)
}

function addPlayer(jogo,playerId){
    if (jogo.players[playerId]) return
    jogo.players[playerId] = {
        x : getRandomPosition(jogo.screen.x),
        y : getRandomPosition(jogo.screen.y),
        color: "orange",
    }

}

function addRandomFruit(jogo){
    const fruitName = "fruit_"+Math.floor(Math.random()*1313213135);
    jogo.fruits[fruitName] = {
        x : Math.floor(Math.random() * jogo.screen.x),
        y : Math.floor(Math.random() * jogo.screen.y),
        color : fruitColors[Math.floor(Math.random() * 4)]
    }
}

function startGame(jogo){
    
    setInterval(() => {  addRandomFruit(jogo) },1000);        
}