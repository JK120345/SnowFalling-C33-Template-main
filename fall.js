class Snowl{
    constructor(x,y){
        var options={
            restitution : 0.2,
        }
        this.image=loadImage("snow4.webp");

        this.r=80;
        this.body = Bodies.circle(x,y,this.r,options);
        //this.addImage=k;
       // this.color=color(255,255,255);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

}