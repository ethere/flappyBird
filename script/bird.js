const birdDom = document.querySelector(".bird");
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);

class Bird extends recTangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
        this.g = 1500;
        this.maxY = gameHeight - landHeight - this.height;
        this.swingStatus = 1;
        this.timer = null;
        this.render();
    }
    startSwing() {
        if(this.timer){
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus++;
            if (this.swingStatus === 4) {
                this.swingStatus = 1;
            }
            this.render()
        }, 100);
    }
    render(){
        super.render();
        this.dom.className = `bird swing${this.swingStatus}`
    }
    stopSwing(){
        clearInterval(this.timer);
        this.timer = null;
    }
    move(duration){
       super.move(duration);
       this.speedY += this.g * duration;
    }
    onMove(){
        if(this.top < 0){
            this.top = 0;
        }
        else if(this.top > this.maxY){
            this.top = this.maxY;
        }
    }
    jump(){
        this.speedY = -450;
    }
}
// const bird = new Bird();
// setInterval(() => {
//     bird.move(16 / 1000);
//     bird.startSwing();
// }, 16);