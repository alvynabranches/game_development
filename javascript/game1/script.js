const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.prepend(canvas);
const game = {grid: 40};
const player = {x:game.grid*7, y:game.grid*4, width:game.grid*2, height:game.grid/2};

canvas.setAttribute('width', grid*15);
canvas.setAttribute('height', grid*10);
canvas.style.border = '1px solid black';

draw();

function draw() {
    ctx.beginPath();
    ctx.rect(player.x, plaeyr.y, player.w, player.h);

}