let canvas = document.getElementById('gameScreen');

// Rendering context 

let ctx = canvas.getContext('2d');

class Tank {
    constructor(gameWidth, gameHeight){

    this.name='tank';
    this.width=25;
    this.height=25;
    this.color='gray';
    this.position={
        x: 1, y:1
    }
    // shape: ctx.fillRect(x, y, width, height)


    }
}

// https://www.youtube.com/watch?v=3EMxBkqC4z0&t=3868s 8:32