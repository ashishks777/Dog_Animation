let playerState='idle';
const dropdown=document.getElementById("animations");
dropdown.addEventListener('change',function(e){
playerState=e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const canvas_heigh = canvas.height = 600;
const canvas_width = canvas.width = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;



let gameFrame = 0;
const stageredFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    }, 
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }

];

animationStates.forEach((state,index)=>{

let frames={
    loc:[],
}
for(let j=0;j<state.frames;j++){
    let posx=j*spriteWidth;
    let posy=index*spriteHeight;
    frames.loc.push({x:posx,y:posy});
}
spriteAnimations[state.name]=frames;

});
window.addEventListener('load',function(){function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_heigh);
    let position = Math.floor(gameFrame / stageredFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY=spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY , spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();});



