let canvas = document.getElementById('gameScreen');

// Rendering context 

let ctx = canvas.getContext('2d');


const tank = {
    name:  'tank',
    x: 400,
    y: 400,
    width: 25,
    height: 25,
    color: 'gray',
    shape: ctx.fillRect(x, y, width, height)
};

ctx.fillStyle = 'red'

ctx.fillRect(x, y, width, height)

// console.log(tank);

// ctx.fillRect(400, 400, 20, 20);