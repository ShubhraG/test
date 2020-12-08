class Paper {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }

       this.body=Bodies.circle(x,y,23,options);
       // this.radius= radius;
       this.pic=loadImage("paper.png")
       //this.pic.scale=0.2
        World.add(world,this.body);
    }

    display(){
        push();
        var pos=this.body.position;
        translate(pos.x, pos.y);
        // rectMode(CENTER)
        //strokeWeight(4);
        //fill(255,0,255)
        imageMode(CENTER);
        image(this.pic,0,0,70,70);
        pop();
        //rectMode(CENTER);
        //ellipse(pos.x,pos.y,this.radius,this.radius)
        //fill("blue");
        
    }
}