
class Pipe extends recTangle{
    constructor(height,top,dom,speed){
        super(52,height,gameWidth,top,speed,0,dom)
    }
    onMove(){
        if(this.left < -this.width){
            this.dom.remove();
        }
    }
}

function random(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

class Pipes{
    constructor(speed){
        const gap = 150;
        const minHeight = 100;
        const maxHeight = landTop - minHeight - gap;
        const upHeight = random(minHeight,maxHeight);

        const upDom = document.createElement('div');
        upDom.className = 'pipe up';

        const downDom = document.createElement('div');
        downDom.className = 'pipe down';

        this.up = new Pipe(upHeight,0,upDom,speed);
        this.down = new Pipe(landTop - upHeight - gap,upHeight + gap,downDom,speed);
        
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }
    get useLess(){
        return this.up.left < -this.up.width;
    }
    move(duration){
        this.up.move(duration);
        this.down.move(duration)
    }
}
class PipesProducer{
    constructor(speed){
        this.speed = speed;
        this.pairs = [];
        this.timer = null;
        this.tick = 1500;
    }
    startProduce(){
        if(this.timer){
            return;
        }
        this.timer = setInterval(() => {
            this.pairs.push(new Pipes(this.speed));
            for(let i = 0; i < this.pairs.length; i++){
                var pair = this.pairs[i];
                if(pair.useLess){
                    this.pairs.splice(i,1);
                    i--;
                }
            }
        }, this.tick);
    }
    stopProduce(){
        clearInterval(this.timer)
        this.timer = null;
    }
}

// const pipes = new PipesProducer(-100);
// pipes.startProduce();
// setInterval(() => {
//     for(let i = 0; i < pipes.pairs.length; i++){
//         pipes.pairs[i].move( 16 / 1000 )
//     }
// }, 16);