/**
 * 能移动的矩形类
 */
class recTangle{
    constructor(width,height,left,top,speedX,speedY,dom){
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.speedX = speedX;
        this.speedY = speedY;
        this.dom = dom;
        this.render();
    }
    render(){
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.width = this.width + 'px';
    }
    move(duration){
        const disX = this.speedX * duration;
        const disY = this.speedY * duration;
        this.left += disX;
        this.top += disY;
        if(this.onMove){
            this.onMove();
        }
        this.render();
    }
}