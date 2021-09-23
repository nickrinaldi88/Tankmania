let canvas = document.getElementById('gameScreen');

// Rendering context 

let ctx = canvas.getContext('2d');

let GAME_WIDTH = 800;
let GAME_HEIGHT = 600;

// 1. MODIFY SETTINGS

ctx.font = '30 px Arial';
ctx.fillStyle = '#f00';
ctx.fillStyle = "#00f";

// 2. DRAW

// ctx.fillRect(760, 400, 20, 20);
// ctx.fillRect(100, 200, 20, 20);

// state of canvas object

let state = {
    x: GAME_WIDTH/2,
    y: GAME_HEIGHT/2
}


// # Code a function that will redraw the rect at a specific x, y
function update(progress){
    state.x += progress

    if (state.x > GAME_WIDTH){
        state.x -= GAME_WIDTH
    }
    pressedKeys:{
        left: false,
        right: false,
        up: false,
        down: false
    }

}


// Function to render current state of the world 

function draw(){
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    ctx.fillRect(state.x -5, state.y-5, 20, 20);
}


function gameloop(timestamp){
    // progress = timestamp - lastRedner
    let progress = timestamp - lastRender

    update(progress)
    draw()





    lastRender = timestamp
    window.requestAnimationFrame(gameloop)
}

let lastRender = 0
window.requestAnimationFrame(gameloop)