class Game {
    constructor() {
        this.sky = new Sky();
        this.land = new Land(-100);
        this.bird = new Bird();
        this.pipes = new PipesProducer(-100);
        this.timer = null;
        this.gameOver = false;
        this.overDom = document.querySelector('.gameOver');
    }
    start() {
        if (this.timer) {
            return;
        }
        if(this.gameOver){
            window.location.reload()
        }
        this.pipes.startProduce();
        this.bird.startSwing()
        this.timer = setInterval(() => {
            this.sky.move(16 / 1000);
            this.bird.move(16 / 1000);
            this.land.move(16 / 1000);
            for (let i = 0; i < this.pipes.pairs.length; i++) {
                this.pipes.pairs[i].move(16 / 1000);
            }
            if(this.isGameOver()){
                this.stop();
                this.gameOver = true;
                this.overDom.style.display = 'block';
            }
        }, 16);
    }
    rectHit(rect1,rect2){
        const circle1x = rect1.left + rect1.width/2;
        const circle2x = rect2.left + rect2.width/2;
        const circle1y = rect1.top + rect1.height/2;
        const circle2y = rect2.top + rect2.height/2;
        var disX = Math.abs(circle2x - circle1x);
        var disY = Math.abs(circle2y - circle1y);
        if(disX < (rect1.width + rect2.width)/2 && disY < (rect1.height + rect2.height)/2){
            return true;
        }
        return false;
    }
    
    isGameOver(){
        if(this.bird.top === this.bird.maxY){
            return true;
        }
        for(let i = 0; i < this.pipes.pairs.length; i++){
            const pair = this.pipes.pairs[i];
            if(this.rectHit(this.bird,pair.up) || this.rectHit(this.bird,pair.down)){
                return true;
            }
        }
        return false;
    }
    stop(){
        clearInterval(this.timer);
        this.pipes.stopProduce();
        this.bird.stopSwing();
        this.timer = null;
    }
    regEvent(){
        window.onkeydown = e => {
            if(e.key == 'Enter'){
                if(this.timer){
                    this.stop()
                }else{
                    this.start()
                }
            }
            else if(e.key == ' '){
                this.bird.jump()
            }
        }
    }
}
const game = new Game();
game.regEvent();
