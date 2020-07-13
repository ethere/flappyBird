const landDom = document.querySelector('.land');
const landHeight = landDom.clientHeight;
const landWidth = landDom.clientWidth;
const landTop = gameHeight - landHeight;

class Land extends recTangle{
    constructor(speed){
        super(landWidth,landHeight,0,landTop,speed,0,landDom);
    }
    onMove(){
        if(this.left <= -landWidth / 2){
            this.left = 0;
        }
    }
}
// const land = new Land(-100);
// setInterval(() => {
//     land.move(16 / 1000)
// }, 16);