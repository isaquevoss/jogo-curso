function renderScreen(jogo, ctx) {
    clearScreen(ctx,jogo)
    
    for (const key in jogo.players) {
        drawPlayer(jogo.players[key],ctx);    
    }
    for (const key in jogo.fruits) {
        drawFruit(jogo.fruits[key],ctx);    
    }
    requestAnimationFrame(() => {
        renderScreen(jogo,ctx)
    })
}

function drawPlayer(player,ctx) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x,player.y,1,1);
}

function drawFruit(fruit,ctx) {
    ctx.fillStyle = fruit.color;
    ctx.fillRect(fruit.x, fruit.y,1,1);

}

function clearScreen(ctx, jogo) {
    ctx.clearRect(0, 0, jogo.screen.x, jogo.screen.y);
}


