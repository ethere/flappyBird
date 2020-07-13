const gameDom = document.querySelector('.game');
const gameWidth = gameDom.clientWidth;
const gameHeight = gameDom.clientHeight;

const skyDom = document.querySelector('.sky');
const skyWidth = skyDom.clientWidth;
const skyHeight = skyDom.clientHeight;

class Sky extends recTangle{
    constructor(){
        super(skyWidth,skyHeight,0,0,-50,0,skyDom);
    }
    onMove(){
        if(this.left <= -gameWidth){
            this.left = 0;
        }
    }
}

// const sky = new Sky();
// setInterval(() => {
//     sky.move(16 / 1000)
// }, 16);