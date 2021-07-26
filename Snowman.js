class Snowman {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        var white= Math.round(random(1,2));
        var blue;
        if(white===1){
            blue="snow4.webp";
        }
        else{blue="snow5.webp";
    }
    this.image=loadImage("blue");
        World.add(world, this.body);
    }
    updateY(){
if(this.body.position.y>height){
    Matter .Body.setPosition(this.body,{x:random(0,800),y:random(0,800)});
}
    }
    showDrop(){
        fill ("white");
        imageMode (CENTER);
        image (this.image,this.body.position.x,this.body.position.y,10,10)
    }
};